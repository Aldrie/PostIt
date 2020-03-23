import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import AuthReducer from 'state/ducks/auth/auth.reducer';
import PostsReducer from 'state/ducks/posts/posts.reducer';
import UserReducer from 'state/ducks/user/user.reducer';

import authSaga from './ducks/auth/auth.saga';
import postsSaga from './ducks/posts/posts.saga';

export const reducers = combineReducers({
	auth: AuthReducer,
	posts: PostsReducer,
	user: UserReducer,
});

const persistConfig = {
	key: 'postIt',
	storage,
	whitelist: ['auth'], 
};

export const rootReducer = persistReducer(persistConfig, reducers);

export function* rootSaga() {
	yield all([
		fork(authSaga),
		fork(postsSaga),
	]);
}
