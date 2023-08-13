import {
    legacy_createStore,
    applyMiddleware,
  } from "@reduxjs/toolkit";
import rootReducer from "../rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store;