import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import matching, { matchSaga } from "./matching";
import badList, { badListSagaPostsSaga } from './badList';
import photo, { photoSaga } from './photos';

const rootReducer = combineReducers({ 
    matching,
    loading,
    badList,
    photo
});

export function* rootSaga() {
    yield all([matchSaga(), badListSagaPostsSaga(), photoSaga()]);
}

export default rootReducer;
