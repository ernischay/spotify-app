import { useDispatch } from 'react-redux'
import { setCurrentTrack } from '../redux/actions/spotifyActions'

export default function PlaylistItem({ playlist: { images, name, description }, uri }) {
    const dispatch = useDispatch()

    const handlePlay = () => dispatch(setCurrentTrack(uri))

    return (
        <div className='playlistItem' onClick={handlePlay}>
            <img className='playlistImage' src={images['0'].url} alt='playlist' />
            <div className='playlistInfo'>
                <p className='playlistInfoName'>{name}</p>
                <p className='playlistInfoDescription'>{description}</p>
            </div>
        </div>
    )
}
