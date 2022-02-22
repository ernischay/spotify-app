import { ActionTypes } from '../constants/action-types'

const initialState = {
    token: null,
    user: null,
}

export const spotifyReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ACCESS_TOKEN:
            return { ...state, token: payload }
        case ActionTypes.SET_USER:
            return { ...state, user: payload }
        default:
            return state
    }
}
