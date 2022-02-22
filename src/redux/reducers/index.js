import { combineReducers } from 'redux'
import { spotifyReducer } from './spotifyReducer'

const reducers = combineReducers({
    spotify: spotifyReducer,
})

export default reducers
