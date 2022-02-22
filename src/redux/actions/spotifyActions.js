import axios from 'axios'
import { ActionTypes } from '../constants/action-types'

const spotify = axios.create({
    baseURL: 'https://api.spotify.com/v1',
})

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
