export const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
export const CLIENT_ID = 'ca4314ca34934415a76aea15f501001b'
export const REDIRECT_URL = 'http://localhost:3000/'

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
]

export const getTokenFromUrl = () => {
    console.log(window.location.hash)
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=')
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial
        }, {})
}

export const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${scopes.join(
    '%20'
)}&response_type=token&show_dialog=true`
