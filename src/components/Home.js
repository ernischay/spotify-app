import '../styles/Home.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFeaturedPlaylist } from '../redux/actions/spotifyActions'
import PlaylistResult from './PlaylistResult'

const spotify = axios.create({
    baseURL: 'https://api.spotify.com/v1',
})

export default function Home() {
    const token = useSelector((state) => state.spotify.token)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchPlaylist = async (accessToken) => {
            try {
                const response = await spotify.get(
                    '/browse/featured-playlists?limit=4',
                    {
                        headers: { Authorization: `'Bearer ${accessToken}'` },
                    }
                )
                dispatch(setFeaturedPlaylist(response.data.playlists.items))
            } catch (e) {
                console.error(e)
            }
        }
        fetchPlaylist(token)
    }, [token, dispatch])

    return (
        <div className='main'>
            <h1 className='homePageGreeting'>Good Evening!</h1>
            <div className='playlist'>
                <p>Featured Playlist</p>
                <PlaylistResult />
            </div>
            <div className='songs'></div>
        </div>
    )
}
