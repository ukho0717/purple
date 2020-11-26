import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as badListAPI from '../lib/api/badList';
import { takeLatest } from 'redux-saga/effects';

const [
    BADLIST_POSTS,
    BADLIST_POSTS_SUCCESS,
    BADLIST_POSTS_FAILURE
] = createRequestActionTypes('badBoard/BADLIST_POSTS'); // 리스트 가져오기
const [
    WRITE_BAD,
    WRITE_BAD_SUCCESS,
    WRITE_BAD_FAILURE
] = createRequestActionTypes('badBoard/WRITE_BAD');   // 불량회원 등록


export const badListPosts = createAction(
    BADLIST_POSTS,
    ({ user_nick, reason }) => ({ user_nick, reason })
);
export const writeBad = createAction(WRITE_BAD, ({ _id, reason }) => ({
    _id,
    reason
}));

const badListPostsSaga = createRequestSaga(BADLIST_POSTS, badListAPI.badList);
const writeBadSaga = createRequestSaga(WRITE_BAD, badListAPI.badWrite);
export function* badListsSaga(){
    yield takeLatest(BADLIST_POSTS, badListPostsSaga);
    yield takeLatest(WRITE_BAD, writeBadSaga);
}

const initialState = {
    _id: '',
    reason: '',
    badList: null,
    error: null
}

const badList = handleActions(
    {
        [BADLIST_POSTS_SUCCESS]: (state, { payload: badList }) => ({
            ...state,
            badList
        }),
        [BADLIST_POSTS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [WRITE_BAD]: state => ({
            ...state,
            badList: null,
            error: null
        }),
        [WRITE_BAD_SUCCESS]: (state, { payload: badList }) => ({
            ...state,
            error: null,
            badList,
        }),
        [WRITE_BAD_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState
);

export default badList;