import { useSelector } from 'react-redux'
import PlaylistItem from './PlaylistItem'

export default function PlaylistResult() {
    const playlists = useSelector((state) => state.spotify.playlists)
    return (
        <div className='playlistResult'>
            {playlists?.map((playlist) => (
                <PlaylistItem key={playlist.id} playlist={playlist} />
            ))}
        </div>
    )
}
