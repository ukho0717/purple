import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as gramPostsAPI from '../lib/api/gramPosts';
import { takeLatest } from 'redux-saga/effects';

const [
    READ_GRAM,
    READ_GRAM_SUCCESS,
    READ_GRAM_FAILURE
] = createRequestActionTypes('gram/READ_GRAM');
const UNLOAD_GRAM = 'gram/UNLOAD_GRAM';

export const readGram = createAction(READ_GRAM, id => id);
export const unloadGram = createAction(UNLOAD_GRAM);

const readGramSaga = createRequestSaga(READ_GRAM, gramPostsAPI.gramRead);
export function* postSaga(){
    yield takeLatest(READ_GRAM, readGramSaga);
}

const initialState = {
    gram: null,
    error: null
};

const gramPost = handleActions (
    {
        [READ_GRAM_SUCCESS]: (state, { payload: gram }) => ({
            ...state,
            gram
        }),
        [READ_GRAM_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [UNLOAD_GRAM]: () => initialState,
    },
    initialState
);

export default gramPost;