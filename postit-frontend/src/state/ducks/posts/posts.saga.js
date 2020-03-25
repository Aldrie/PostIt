import { all, put, delay, call, takeLeading, takeLatest } from 'redux-saga/effects';
import postsService from 'services/api/posts';
import {
	PostActionTypes,
	loadPostsSuccess,
	loadPostsFailure,
	createPostFailure,
	createPostSuccess,
	loadPostSuccess,
	loadPostFailure,
	loadUserPostsSuccess,
	loadUserPostsFailure,
} from './posts.actions';

import { errorToast, successToast } from 'utils/toast';

function* handleLoadPost({ payload }) {
	try {
		yield delay(1800);
		const response = yield call(postsService.loadPost, payload);
		yield put(loadPostSuccess(response.data));
	} catch(err) {
		yield put(loadPostFailure(err));
	}
}

function* handleLoadPosts({ payload }) {
	try {
		yield delay(2000);
		const response = yield call(postsService.loadPosts, payload);
		yield put(loadPostsSuccess(response.data));
	} catch(err) {
		errorToast('Erro!', 'Erro ao carregar posts!');
		yield put(loadPostsFailure(err));
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
		takeLeading(PostActionTypes.LOAD_POST, handleLoadPost),
		takeLeading(PostActionTypes.LOAD_POSTS, handleLoadPosts),
		takeLatest(PostActionTypes.CREATE_POST, handleCreatePost),
	]);
}
