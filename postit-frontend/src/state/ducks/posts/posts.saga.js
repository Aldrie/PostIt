import { all, put, delay, call, takeLeading, takeLatest } from 'redux-saga/effects';
import postsService from 'services/api/posts';
import { PostActionTypes, loadPostSuccess, loadPostFailure, createPostFailure, createPostSuccess } from './posts.actions';
import { errorToast, successToast } from 'utils/toast';

function* handleLoadPosts({ payload }) {
	try {
		yield delay(2000);
		const response = yield call(postsService.loadPosts, payload);
		yield put(loadPostSuccess(response.data));
	} catch(err) {
		errorToast('Erro!', 'Erro ao carregar posts!');
		yield put(loadPostFailure(err));
		console.log(err);
	}
}

function* handleCreatePost({ payload }) {
	try {
		yield delay(1500);
		yield call(postsService.createPost, payload);
		successToast('Yeahh!', 'Post feito com sucesso!!!');
		yield put(createPostSuccess());
	}	catch(err) {
		errorToast('Ahhh :(', 'Erro ao cadastrar o post!')
		yield put(createPostFailure(err));
	}
}

export default function* postSaga() {
	yield all([
		takeLeading(PostActionTypes.LOAD_POSTS, handleLoadPosts),
		takeLatest(PostActionTypes.CREATE_POST, handleCreatePost),
	]);
}
