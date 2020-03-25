import { takeLatest, call, put, delay, all } from 'redux-saga/effects';
import userService from 'services/api/user';
import postsService from 'services/api/posts';
import { UserActionTypes, loadUserSuccess, loadUserFailure, loadUserPostsSuccess, loadUserPostsFailure } from './user.actions';
import { errorToast } from 'utils/toast';

function* handleLoadUserPosts({ payload }) {
	try {
		yield delay(2000);
		const userResponse = yield call(userService.loadUser, payload.id);
		const postsResponse = yield call(postsService.loadPostsFromUser, payload.id, payload.last);
		yield put(loadUserPostsSuccess(userResponse.data, postsResponse.data));
	} catch(err) {
		errorToast('Erro!', 'Erro ao carregar posts!');
		yield put(loadUserPostsFailure(err));
		console.log(err);
	}
}

export default function* userSaga() {
	yield all([
		takeLatest(UserActionTypes.LOAD_USER_POSTS, handleLoadUserPosts),
	]);
}
