import axios from 'axios'

export const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
export const CLIENT_ID = 'ca4314ca34934415a76aea15f501001b'
export const REDIRECT_URL = 'http://localhost:3000/'

const scopes = ['streaming', 'user-read-playback-state', 'user-modify-playback-state', 'user-top-read']

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=')
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial
        }, {})
}

export const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`

export const spotify = axios.create({
    baseURL: 'https://api.spotify.com/v1',
})
