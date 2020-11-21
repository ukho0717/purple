import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as adminAPI from '../lib/api/admin';
import { takeLatest } from 'redux-saga/effects';

const [
    USER_LIST,
    USER_LIST_SUCCESS,
    USER_LIST_FAILURE
] = createRequestActionTypes('admin/USER_LIST'); //MATCH리스트의 액션타입만들어주기.
const UNLOAD_LIST = 'admin/UNLOAD_LIST';

export const adminUserList = createAction(USER_LIST);
export const adminUserUnloadList = createAction(UNLOAD_LIST);

const adminUserListSaga = createRequestSaga(USER_LIST, adminAPI.user);
export function* adminUserSaga(){
    yield takeLatest(USER_LIST, adminUserListSaga);
}

const initialState = {
    user: null,
    error: null
};

const admin = handleActions (
    {
        [USER_LIST_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user
        }),
        [USER_LIST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [UNLOAD_LIST]: () => initialState,
    },
    initialState
);

export default admin;