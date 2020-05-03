import {userConstants} from "../../constans/userConstans"
import {authConstants} from "../../constans/authConstans";

const INITIAL_STATE = {

};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userConstants.USER_PROFILE_LOAD_SUCCESS:
            return {
                ...state,
                [action.payload.data.id]: action.payload.data
            };
        case userConstants.USER_PROFILE_UPDATE_SECCESS:
            const userId = action.payload.pop();
            const updatedUser = state[userId];
            updatedUser.friends = action.payload
            return{
                ...state,
                    [userId]: updatedUser
            };
        case authConstants.LOGUOT:
            return {};
        default:
            return state
    }
}

export default userReducer