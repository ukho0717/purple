import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as badListAPI from '../lib/api/badList';
import { takeLatest } from 'redux-saga/effects';

const [
    BADLIST_POSTS,
    BADLIST_POSTS_SUCCESS,
    BADLIST_POSTS_FAILURE
] = createRequestActionTypes('badBoard/BADLIST_POSTS');

export const badListPosts = createAction(
    BADLIST_POSTS,
    ({ user_nick, reason }) => ({ user_nick, reason })
);

const badListPostsSaga = createRequestSaga(BADLIST_POSTS, badListAPI.badList);
export function* badListsSaga(){
    yield takeLatest(BADLIST_POSTS, badListPostsSaga);
}

const initialState = {
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
        })
    },
    initialState
);

export default badList;