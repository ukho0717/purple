import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';
import { takeLatest } from 'redux-saga/effects';

const [
    READ_PROFILE,
    READ_PROFILE_SUCCESS,
    READ_PROFILE_FAILURE
] =createRequestActionTypes('profile/READ_PROFILE');
const UNLOAD_PROFILE = 'profile/UNLOAD_PROFILE'; 

const [
    UPDATE_PROFILE,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE
] =createRequestActionTypes('profile/UPDATE_PROFILE'); //프로필 수정

export const readProfile = createAction(READ_PROFILE, _id=>_id);
export const updateProfile = createAction(UPDATE_PROFILE,({brief_intro,address,school,personality,fav_song,fav_movie,fav_food})=>({brief_intro,address,school,personality,fav_song,fav_movie,fav_food}));
export const unloadProfile = createAction(UNLOAD_PROFILE);

const readProfileSaga = createRequestSaga(READ_PROFILE,authAPI.readProfile);
const updateProfileSaga = createRequestSaga(UPDATE_PROFILE,authAPI.update);

export function* profileSaga(){
    yield takeLatest(READ_PROFILE,readProfileSaga);
    yield takeLatest(UPDATE_PROFILE,updateProfileSaga);
}
const initialState={
    error:null
}
const profile = handleActions(
    {
        [READ_PROFILE_SUCCESS]:(state,{payload:profile})=>({
            ...state,
            profile
        }),
        [READ_PROFILE_FAILURE]:(state,{payload:error})=>({
            ...state,
            error
        }),
        [UNLOAD_PROFILE]:()=>initialState,
        [UPDATE_PROFILE]:state =>({
            ...state,
            profileError:null
        }),
        [UPDATE_PROFILE_SUCCESS]:(state,{payload:profile})=>({
            ...state,
            profile,
            profileError: null,
        }),
        [UPDATE_PROFILE_FAILURE]:(state,{payload:error})=>({
            ...state,
            profileError:error
        }),
    },
    initialState
);

export default profile;