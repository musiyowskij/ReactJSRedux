import createAction from "../action";
import {userConstants} from "../../constans/userConstans";

export const userProfileLoadSuccess = (data) => createAction(userConstants.USER_PROFILE_LOAD_SUCCESS, data)
export const userProfileLoadFailure = (error) => createAction(userConstants.USER_PROFILE_LOAD_FAILURE, error)

export const userProfileUpdateSuccess = (data) => createAction(userConstants.USER_PROFILE_UPDATE_SECCESS, data)
export const userProfileUpdateFailure = (error) => createAction(userConstants.USER_PROFILE_UPDATE_FAILURE, error)