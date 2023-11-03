import { createStore } from 'redux';
import { persistStore } from 'redux-persist'
import persistReducer from 'redux-persist/es/persistReducer';
import { reducer } from './reducers/rootReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const persistingReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistingReducer);
export const persistor = persistStore(store);
