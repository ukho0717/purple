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
import gramPost, { postSaga } from './gramPost';

const rootReducer = combineReducers({ 
    matching,
    loading,
    back,
    ctrl,
    badList,
    listGram,
    listLikeGram,
    gramWrite,
    gramPost
});

export function* rootSaga() {
    yield all([matchSaga(), backSaga(), ctrlSaga(), badListsSaga(), gramListsSaga(), likeGramListsSaga(), writeSaga(), postSaga()]);
}

export default rootReducer;
