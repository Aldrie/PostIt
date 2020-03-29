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

		successToast('Cadastrado com sucesso :)');
		yield put(registerSuccess(response.data));
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

		yield put(loginSuccess({ name, avatar, token }));
	}	catch(error) {
		yield put(loginFailure(error));
		if(error?.response?.status === 404) {
			errorToast('Erro!', 'Usuário inválido!');
		}else {
			errorToast('Erro!', 'Erro ao entrar, tente novamente!');
		}
	}
}

function handleLogout() {
	try {
		localStorage.clear();
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
