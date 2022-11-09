// Packages
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Reducers
import userReducer from "../features/users/reducers";
import authReducer from "../features/auth/reducers";

// Saga
import rootSaga from "../saga";

const sagaMiddleWare = createSagaMiddleware();
const makeStore = () => {
  const store = configureStore({
    reducer: combineReducers({
      data_users: userReducer,
      data_auth: authReducer,
    }),
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware().concat(sagaMiddleWare),
    ],
    devTools: true,
  });
  sagaMiddleWare.run(rootSaga);
  return store;
};

export type RootState = ReturnType<typeof makeStore>;
export type AppState = ReturnType<RootState["getState"]>;

export const wrapper = createWrapper<RootState>(makeStore);
