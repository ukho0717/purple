import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import matching, { matchSaga } from "./matching";
import badList, { badListSagaPostsSaga } from './badList';

const rootReducer = combineReducers({ 
    matching,
    loading,
    badList
});

export function* rootSaga() {
    yield all([matchSaga(), badListSagaPostsSaga()]);
}

export default rootReducer;
