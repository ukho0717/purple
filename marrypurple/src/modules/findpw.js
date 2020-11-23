import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

const [FINDPW,FINDPW_SUCCESS,FINDPW_FAILURE] = createRequestActionTypes("auth/FINDPW");

export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
        form,
        key,
        value,
    }),
);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const findPw = createAction(FINDPW,({user_email})=>({
    user_email,
}));

const findpwSaga = createRequestSaga(FINDPW, authAPI.findpw);
export function* authSaga(){
    yield takeLatest(FINDPW,findpwSaga);
}
const initialState = {
    findpw:{
        user_email:""
    },
    user:null,
    error:null

};
const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
        produce(state, (draft) => {
        draft[form][key] = value;
        }),
        [INITIALIZE_FORM]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form],
            authError: null,
        }),
        [FINDPW_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth,
        }),
        [FINDPW_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
        },
        initialState,
);

export default auth;