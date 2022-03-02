import '../styles/Home.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFeaturedPlaylist, setRecentlyPlayed } from '../redux/actions/spotifyActions'
import PlaylistResult from './PlaylistResult'
import SongsResult from './SongsResult'
import { spotify } from '../spotify.config'

export default function Home() {
    const token = useSelector((state) => state.spotify.token)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchPlaylistAndSongs = async (accessToken) => {
            try {
                const [playlistResponse, songsResponse] = await Promise.all([
                    spotify.get('/browse/featured-playlists?limit=6', {
                        headers: { Authorization: `'Bearer ${accessToken}'` },
                    }),
                    spotify.get('/me/player/recently-played?limit=6', {
                        headers: { Authorization: `'Bearer ${accessToken}'` },
                    }),
                ])
                dispatch(setFeaturedPlaylist(playlistResponse.data.playlists.items))
                dispatch(setRecentlyPlayed(songsResponse.data.items))
            } catch (e) {
                console.error(e)
            }
        }
        fetchPlaylistAndSongs(token)
    }, [token, dispatch])

    return (
        <div className='main'>
            <h1 className='homePageGreeting'>Good Evening!</h1>
            <div className='playlist'>
                <div className='featuredPlaylist'>
                    <p>Featured Playlist</p>
                    <a href='/#'>See All</a>
                </div>
                <PlaylistResult />
            </div>
            <div className='songs'>
                <div className='recentSongs'>
                    <p>Recently Played</p>
                    <a href='/#'>See All</a>
                </div>
                <SongsResult />
            </div>
        </div>
    )
}
