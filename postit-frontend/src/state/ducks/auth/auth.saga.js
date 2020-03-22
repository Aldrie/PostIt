import { put, all, takeLatest, delay } from 'redux-saga/effects';
import authService from 'services/api/auth';

import {
	registerSuccess,
	registerFailure,
	AuthActionTypes,
	loginSuccess,
	loginFailure,
} from './auth.actions';

function* handleRegister({ payload }) {
	try {
		const { name, email, password, avatar } = payload;
		const response = yield authService.register(name, email, password, avatar);

		localStorage.setItem('token', response.data.token);
		yield put(registerSuccess(response.data));
	} catch (error) {
		console.log(error);
		yield put(registerFailure(error));
	}
}

function* handleLogin({ payload }) {
	try {
		const { email, password } = payload;
		const response = yield authService.login(email, password);

		localStorage.setItem('token', response.data.token);
		yield delay(1200);
		yield put(loginSuccess(response.data));
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
