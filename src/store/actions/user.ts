import { User, UserActionTypes } from "custom-types";
import { SET_CURRENT_USER } from "./actionTypes";

export const setCurrentUser = (user: User): UserActionTypes => ({
    type: SET_CURRENT_USER,
    payload: user
})