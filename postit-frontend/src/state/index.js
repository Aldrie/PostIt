import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer, rootSaga } from './configs';

const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(
	rootReducer,
	composeWithDevTools(middlewares),
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
