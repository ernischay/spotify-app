import { ActionTypes } from '../constants/action-types'

export const setAccessToken = (token) => {
    return {
        type: ActionTypes.SET_ACCESS_TOKEN,
        payload: token,
    }
}

export const setUser = (user) => {
    return {
        type: ActionTypes.SET_USER,
        payload: user,
    }
}

export const setFeaturedPlaylist = (playlists) => {
    return {
        type: ActionTypes.SET_FEATURED_PLAYLIST,
        payload: playlists,
    }
}

export const setRecentlyPlayed = (songs) => {
    return {
        type: ActionTypes.SET_RECENTLY_PLAYED,
        payload: songs,
    }
}

export const setSearchResult = (results) => {
    return {
        type: ActionTypes.SET_SEARCH_RESULT,
        payload: results,
    }
}

export const setCurrentTrack = (trackUri) => {
    return {
        type: ActionTypes.SET_CURRENT_TRACK,
        payload: trackUri,
    }
}
