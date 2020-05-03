import createAction from "../action";
import {eventConstant} from "../../constans/eventConstant";


export const eventCreateSuccess = (data) => createAction(eventConstant.CREATE_SUCCESS, data);
export const eventCreateFailure = (error) => createAction(eventConstant.CREATE_FAILURE, error);

export const eventFetchListSuccess = (data) => createAction(eventConstant.FETCH_LIST_OF_EVENTS_SUCCESS, data);
export const eventFetchListFailure = (error) => createAction(eventConstant.FETCH_LIST_OF_EVENTS_FAILURE, error);

export const eventJoinSuccess = (data) => createAction(eventConstant.EVENT_JOIN_SUCESS, data);
export const eventJoinFailure = (error) => createAction(eventConstant.EVENT_JOIN_FAILURE, error);

export const eventDeleteSuccess = (data) => createAction(eventConstant.EVENT_DELETE_SUCCESS, data);
export const eventDeleteFialure = (error) => createAction(eventConstant.EVENT_DELETE_FAILURE, error);

export const eventInviteFriendSuccess = (data) => createAction(eventConstant.EVENT_INVITE_FRIEND_SUCCESS, data);
export const eventInviteFriendFailure = (error) => createAction(eventConstant.EVENT_INVITE_FRIEND_FAILURE, error);