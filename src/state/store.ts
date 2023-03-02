import { configureStore } from '@reduxjs/toolkit';
import { rootReducer as reducer } from './reducers';

export type AppState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore<AppState>({
    reducer,
    devTools: true
});

export const storeAppDispatch: AppDispatch = store.dispatch;
export default store;
