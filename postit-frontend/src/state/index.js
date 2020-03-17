import { createStore, combineReducers } from 'redux';
import AuthReducer from 'state/ducks/auth/auth.reducer';

const reducers = combineReducers({
	auth: AuthReducer,
});

export default createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
