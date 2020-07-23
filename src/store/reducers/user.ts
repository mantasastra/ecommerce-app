import {  UserState, UserActionTypes } from "custom-types";
import { SET_CURRENT_USER } from "../actions/actionTypes"

const initState: UserState = {
    currentUser: null
}

const userReducer = (state = initState, action: UserActionTypes) => {
    switch (action.type) {
        case SET_CURRENT_USER: {
            return {
                ...state,
                currentUser: action.payload
            }
        }
        default:
            return state
    }
}

export default userReducer