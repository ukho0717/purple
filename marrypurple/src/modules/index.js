import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import matching, { matchSaga } from "./matching";
import back, {backSaga} from './back';
import ctrl, {ctrlSaga} from './ctrl'
import badList, { badListsSaga } from './badList';
import listGram, { gramListsSaga } from './listGram';
import listLikeGram, { likeGramListsSaga } from './listLikeGram'
import gramWrite, { writeSaga } from './gramWrite';
import user, { userSaga } from "./user";
import auth, {authSaga} from "./auth";

const rootReducer = combineReducers({ 
    user,
    auth,
    matching,
    loading,
    back,
    ctrl,
    badList,
    listGram,
    listLikeGram,
    gramWrite
});

export function* rootSaga() {
    yield all([authSaga(),userSaga(),matchSaga(), backSaga(), ctrlSaga(), badListsSaga(), gramListsSaga(), likeGramListsSaga(), writeSaga()]);
}

export default rootReducer;
