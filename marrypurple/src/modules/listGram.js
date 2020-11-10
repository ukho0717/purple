import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as gramPostsAPI from '../lib/api/gramPosts';
import { takeLatest } from 'redux-saga/effects';

const [
    GRAMLIST_POSTS,
    GRAMLIST_POSTS_SUCCESS,
    GRAMLIST_POSTS_FAILURE
] = createRequestActionTypes('gram/GRAMLIST_POSTS');

export const gramListPosts = createAction(GRAMLIST_POSTS);

const gramListPostsSaga = createRequestSaga(GRAMLIST_POSTS, gramPostsAPI.gramList);
export function* gramListsSaga(){
    yield takeLatest(GRAMLIST_POSTS, gramListPostsSaga);
}

const initialState = {
    list: null,
    error: null
}

const listGram = handleActions(
    {
        [GRAMLIST_POSTS_SUCCESS]: (state, { payload: list }) => ({
            ...state,
            list
        }),
        [GRAMLIST_POSTS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        })
    },
    initialState
);

export default listGram;