import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getTokenFromUrl } from './spotify.config'
import { setAccessToken } from './redux/actions/spotifyActions'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Profile from './components/Profile'
import Search from './components/Search'
import Footer from './components/Footer'
import Login from './components/Login'
import './styles/Spotify.css'

function Spotify() {
    const token = useSelector((state) => state.spotify.token)
    const dispatch = useDispatch()

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
                        <Route path='/' element={<Home />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/search' element={<Search />} />
                    </Routes>
                    <Footer />
                </Router>
            ) : (
                <Login />
            )}
        </div>
    )
}

export default Spotify
