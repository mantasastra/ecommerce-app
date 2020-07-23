import { Action } from "custom-types"
import * as types from "./actionTypes"

type User = Object

export const setCurrentUser = (user: User): Action => ({
    type: types.SET_CURRENT_USER,
    payload: user
})