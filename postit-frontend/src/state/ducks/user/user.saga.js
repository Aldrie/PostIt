import { takeLatest, call, put, all } from 'redux-saga/effects';
import userService from 'services/api/user';
import { UserActionTypes, loadUserSuccess, loadUserFailure } from './user.actions';
import { errorToast } from 'utils/toast';

function* handleLoadUser({ payload }) {
	try {
		const response = yield call(userService.loadUser, payload);
		yield put(loadUserSuccess(response.data));
	} catch(err) {
		yield put(loadUserFailure(err));
		errorToast('Erro!', 'Erro ao carregar o usuário');
	}
}

export default function* userSaga() {
	yield all([
		takeLatest(UserActionTypes.LOAD_USER, handleLoadUser),
	]);
}
