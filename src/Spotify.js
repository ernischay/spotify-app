import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import './styles/Spotify.css'
import Login from './components/Login'
import { getTokenFromUrl } from './spotify.config'
import { useSelector, useDispatch } from 'react-redux'
import { setAccessToken } from './redux/actions/spotifyActions'
import Profile from './components/Profile'

function Spotify() {
    const token = useSelector((state) => state.spotify.token)
    const dispatch = useDispatch()

    console.log(token)

    useEffect(() => {
        const hash = getTokenFromUrl()
        window.location.hash = ''
        const accessToken = hash.access_token
        if (accessToken) {
            dispatch(setAccessToken(accessToken))
        }
    }, [dispatch])

    return (
        <div className='spotify'>
            {token ? (
                <Router>
                    <Sidebar />
                    <Routes>
                        <Route path='/#' element={<Home />} />
                        <Route path='/profile' element={<Profile />} />
                    </Routes>
                </Router>
            ) : (
                <Login />
            )}
        </div>
    )
}

export default Spotify
