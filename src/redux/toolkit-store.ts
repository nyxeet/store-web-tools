import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/toolkit/user-slice';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  user: userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
