import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import matching, { matchSaga } from "./matching";
import back, {backSaga} from './back';
import ctrl, {ctrlSaga} from './ctrl'


const rootReducer = combineReducers({ 
    matching,
    loading,
    back,
    ctrl
});

export function* rootSaga() {
    yield all([ matchSaga(), backSaga(), ctrlSaga() ]);
}

export default rootReducer;
