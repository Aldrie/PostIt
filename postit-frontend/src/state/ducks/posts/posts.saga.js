import { all, put, delay, takeLatest, takeLeading } from 'redux-saga/effects';
import postsService from 'services/api/posts';
import { PostActionTypes, loadPostSuccess, loadPostFailure } from './posts.actions';
import { errorToast } from 'utils/toast';

function* handleLoadPosts({ payload }) {
	try {
		const response = yield postsService.loadPosts(payload);
		yield delay(2000);
		yield put(loadPostSuccess(response.data));
	} catch(err) {
		errorToast('Erro!', 'Erro ao carregar posts!');
		yield put(loadPostFailure(err));
		console.log(err);
	}
}

export default function* postSaga() {
	yield all([
		takeLeading(PostActionTypes.LOAD_POSTS, handleLoadPosts)
	]);
}
