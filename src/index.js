import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Spotify from './Spotify'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Spotify />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)