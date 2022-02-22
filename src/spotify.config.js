export const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
export const CLIENT_ID = 'caa84894b1474748afaf988730dfc4db'
export const REDIRECT_URL = 'https://nervous-panini-05d3a3.netlify.app/'

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
