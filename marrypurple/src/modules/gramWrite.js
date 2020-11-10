import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as gramPostsAPI from '../lib/api/gramPosts';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'gramWrite/INITIALIZE';  // 모든 내용 초기화
const CHANGE_FIELD = 'gramWrite/CHANGE_FIELD';  // 특정 key값 바꾸기
const [
    WRITE_GRAM,
    WRITE_GRAM_SUCCESS,
    WRITE_GRAM_FAILURE
] = createRequestActionTypes('gramWrite/WRITE_GRAM');   // 그램 작성

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
    key,
    value
}));
export const writeGram = createAction(WRITE_GRAM, ({ InstaImage, content, comment }) => ({
    InstaImage,
    content,
    comment
}));

const writeGramSaga = createRequestSaga(WRITE_GRAM, gramPostsAPI.gramWrite);
export function* writeSaga(){
    yield takeLatest(WRITE_GRAM, writeGramSaga);
}

const initialState = {
    InstaImage: '',
    content: '',
    comment: [],
    gram: null,
    gramError: null
};

const gramWrite = handleActions(
    {
        [INITIALIZE]: (state) => initialState,
        [CHANGE_FIELD]: (state, { payload: {key, value} }) => ({
            ...state,
            [key]: value,
        }),
        [WRITE_GRAM]: (state) => ({
            ...state,
            gram: null,
            gramError: null,
        }),
        [WRITE_GRAM_SUCCESS]: (state, { payload: gram }) => ({
            ...state,
            gram,
        }),
        [WRITE_GRAM_FAILURE]: (state, { payload: gramError }) => ({
            ...state,
            gramError,
        }),
    },
    initialState,
)

export default gramWrite;