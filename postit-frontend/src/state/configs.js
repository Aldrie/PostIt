import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

import AuthReducer from 'state/ducks/auth/auth.reducer';
import PostsReducer from 'state/ducks/posts/posts.reducer';
import UserReducer from 'state/ducks/user/user.reducer';

import authSaga from './ducks/auth/auth.saga';

export const rootReducer = combineReducers({
	auth: AuthReducer,
	posts: PostsReducer,
	user: UserReducer,
});

export function* rootSaga() {
	yield all([
		fork(authSaga),
	]);
}
