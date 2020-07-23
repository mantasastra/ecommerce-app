import { Action } from "custom-types"
import * as types from "../actions/actionTypes"

type State = {
    currentUser: Object | null
}

const initState: State = {
    currentUser: null
}

const userReducer = (state = initState, action: Action) => {
    switch (action.type) {
        case types.SET_CURRENT_USER: {
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