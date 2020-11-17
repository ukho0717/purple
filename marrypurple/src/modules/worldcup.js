import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as worldcupAPI from '../lib/api/worldcup';
import { takeLatest } from 'redux-saga/effects';

const [
    WORLDCUP_LIST,
    WORLDCUP_LIST_SUCCESS,
    WORLDCUP_LIST_FAILURE
] = createRequestActionTypes('worldcup/WORLDCUP_LIST');

export const worldcupList = createAction(WORLDCUP_LIST);

const worldcupListSaga = createRequestSaga(WORLDCUP_LIST, worldcupAPI.userList);
export function* worldcupSaga(){
    yield takeLatest(WORLDCUP_LIST, worldcupListSaga);
}

const initialState = {
    list: null,
    error: null
}

const worldcup = handleActions(
    {
        [WORLDCUP_LIST_SUCCESS]: (state, { payload: list }) => ({
            ...state,
            list
        }),
        [WORLDCUP_LIST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        })
    },
    initialState
);

export default worldcup;