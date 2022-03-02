import { useDispatch, useSelector } from 'react-redux'
import SongItem from './SongItem'
import { setCurrentTrack } from '../redux/actions/spotifyActions'

export default function SongsResult() {
    const songs = useSelector((state) => state.spotify.songs)

    const dispatch = useDispatch()

    const handlePlay = (uri) => {
        dispatch(setCurrentTrack(uri))
    }

    return (
        <div className='playlistResult'>
            {songs?.map((song) => (
                <SongItem key={song.track.id} song={song.track.album} uri={song.track.uri} name={song.track.name} onClick={() => handlePlay(song.track.uri)} />
            ))}
        </div>
    )
}
