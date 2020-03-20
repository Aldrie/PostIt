import { put, all, takeLatest } from 'redux-saga/effects';
import {
	registerSuccess,
	registerFailure,
	AuthActionTypes,
	loginSuccess,
	loginFailure,
} from './auth.actions';

function* handleRegister({ payload }) {
	try {
		const user = {
			name: payload.name,
			avatar: 'awdwdawd',
			token: 'treertert',
		};
		console.log(payload);
		
		yield put(registerSuccess(user));
	} catch (error) {
		yield put(registerFailure(error));
	}
}

function* handleLogin({ payload }) {
	try {
		const user = {
			name: payload.name,
			avatar: 'awdwdawd',
			token: 'treertert',
		};
		yield put(loginSuccess(user));
	}	catch(error) {
		yield put(loginFailure(error));
	}
}

export default function* authSaga() {
	yield all([
		takeLatest( AuthActionTypes.REGISTER, handleRegister),
		takeLatest( AuthActionTypes.LOGIN, handleLogin),
	]);
}
