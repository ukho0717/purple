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
<<<<<<< HEAD
import gramPost, { postSaga } from './gramPost';
=======
import user, { userSaga } from "./user";
import auth, {authSaga} from "./auth";
>>>>>>> 4570185a3f830070b974e1b84eb67b36984bd8dd

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
    gramWrite,
    gramPost
});

export function* rootSaga() {
<<<<<<< HEAD
    yield all([matchSaga(), backSaga(), ctrlSaga(), badListsSaga(), gramListsSaga(), likeGramListsSaga(), writeSaga(), postSaga()]);
=======
    yield all([authSaga(),userSaga(),matchSaga(), backSaga(), ctrlSaga(), badListsSaga(), gramListsSaga(), likeGramListsSaga(), writeSaga()]);
>>>>>>> 4570185a3f830070b974e1b84eb67b36984bd8dd
}

export default rootReducer;
