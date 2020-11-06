import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import matching, { matchSaga } from "./matching";

const rootReducer = combineReducers({ 
    matching,
    loading
});

export function* rootSaga() {
    yield all([matchSaga()]);
}

export default rootReducer;
