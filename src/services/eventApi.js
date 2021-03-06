import axios from 'axios'
import URLS from "../shared/Urls.constants";
import {
    eventCreateFailure,
    eventCreateSuccess,
    eventDeleteFialure,
    eventDeleteSuccess,
    eventInviteFriendFailure,
    eventInviteFriendSuccess,
    eventJoinFailure,
    eventJoinSuccess,
    fetchListFriendsEventsFailure,
    fetchListFriendsEventsSuccess
} from "../actions/event/actions";
import {fetchUserEvents, fetchUserProfile} from "./userApi";


export const addEvent = (userId, name, description, dateTime, file) => async (dispatch) => {

    const body = JSON.stringify({name: name, description: description, dateTime: dateTime});

    const formData = new FormData();
    formData.append("eventCreateDTO", body);
    formData.append("files", file);

    axios.post(URLS.apiEvent, formData)
        .then(res => {
                dispatch(eventCreateSuccess(res));
                dispatch(fetchUserEvents(userId))
            })
        .catch(error => {
                dispatch(eventCreateFailure(error.response.data.message));
            })
};

export const fetchEventList = () => async (dispatch) =>{
    axios.get(URLS.apiEvent)
        .then(res => {
            dispatch(fetchListFriendsEventsSuccess(res))
        })
        .catch(error => {
            dispatch(fetchListFriendsEventsFailure(error))
        })
};

export const joinEvent = (eventId) => async  (dispatch) =>{
    axios.post(URLS.apiEvent + '/' + eventId + '/join')
        .then(res => {
            dispatch(eventJoinSuccess(res))
        })
        .catch(error => {
            dispatch(eventJoinFailure(error))
        })
};

export const deleteEvent = (eventId, userId) => async  (dispatch) =>{
    axios.delete(URLS.apiEvent + '/' + eventId)
        .then(res => {
            dispatch(eventDeleteSuccess(res))
            dispatch(fetchUserProfile(userId))
        })
        .catch(error => {
            dispatch(eventDeleteFialure(error))
        })
};

export const inviteFriendToEvent = (userId, eventId) => async (dispatch) => {
    axios.post(URLS.apiUser+'/' + userId + '/invite/' + eventId )
        .then(res => {
            dispatch(eventInviteFriendSuccess(res))
        })
        .catch(error => {
            dispatch(eventInviteFriendFailure(error))
        })
};




