import { put, all, call, delay, takeLatest } from 'redux-saga/effects';
import authService from 'services/api/auth';

import {
	registerSuccess,
	registerFailure,
	AuthActionTypes,
	loginSuccess,
	loginFailure,
} from './auth.actions';

import { successToast, errorToast } from 'utils/toast';

function* handleRegister({ payload }) {
	try {
		yield delay(1500);
		const { name, email, password, avatar } = payload;
		const response = yield call(authService.register, name, email, password, avatar);

		localStorage.setItem('token', response.data.token);
		successToast('Cadastrado com sucesso :)');
		yield put(registerSuccess(response.data));
		window.location.reload();
	} catch (error) {
		console.log(error);
		errorToast('Erro!', 'Erro ao cadastrar usuário :(')
		yield put(registerFailure(error));
	}
}

function* handleLogin({ payload }) {
	try {
		yield delay(1500);
		const { email, password } = payload;
		const response = yield call(authService.login, email, password);
		const { name, avatar, token } = response.data;

		localStorage.setItem('token', token);
		yield put(loginSuccess({ name, avatar }));
		window.location.reload();
	}	catch(error) {
		if(error.response.status === 404) {
			errorToast('Erro!', 'Usuário inválido!');
		}else {
			errorToast('Erro!', 'Erro ao entrar, tente novamente!');
		}
		yield put(loginFailure(error));
	}
}

function handleLogout() {
	try {
		localStorage.clear();
		window.location.reload();
	} catch(err) {	
		errorToast('Erro ao sair');
	}
}

export default function* authSaga() {
	yield all([
		takeLatest(AuthActionTypes.REGISTER, handleRegister),
		takeLatest(AuthActionTypes.LOGIN, handleLogin),
		takeLatest(AuthActionTypes.LOGOUT, handleLogout)
	]);
}
