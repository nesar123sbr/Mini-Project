import {createStore, applyMiddleware} from 'redux';
import {allReducer} from './CombineReducer';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';
import CreateSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SagaWatcher} from './SagaWatcher';

const config = {
  key: 'movieDB',
  storage: AsyncStorage,
};

const SagaMiddleware = CreateSagaMiddleware();

const persistedReducer = persistReducer(config, allReducer);

const allMiddleware = applyMiddleware(logger, SagaMiddleware);

export const Store = createStore(persistedReducer, allMiddleware);

export const Persistor = persistStore(Store);

SagaMiddleware.run(SagaWatcher);
