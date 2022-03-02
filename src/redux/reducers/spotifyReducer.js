import { ActionTypes } from '../constants/action-types'

const initialState = {
    token: null,
    user: null,
    playlists: null,
    songs: null,
    results: null,
    trackUri: null,
}

export const spotifyReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ACCESS_TOKEN:
            return { ...state, token: payload }
        case ActionTypes.SET_USER:
            return { ...state, user: payload }
        case ActionTypes.SET_FEATURED_PLAYLIST:
            return { ...state, playlists: payload }
        case ActionTypes.SET_RECENTLY_PLAYED:
            return { ...state, songs: payload }
        case ActionTypes.SET_SEARCH_RESULT:
            return { ...state, results: payload }
        case ActionTypes.SET_CURRENT_TRACK:
            return { ...state, trackUri: payload }
        default:
            return state
    }
}
