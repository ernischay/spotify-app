import { useDispatch } from 'react-redux'
import { setCurrentTrack } from '../redux/actions/spotifyActions'

export default function SongItem({ song: { images, artists, album, genres }, uri, name }) {
    const image = !images ? album.images['0'] : images['0']

    const dispatch = useDispatch()

    const handlePlay = () => dispatch(setCurrentTrack(uri))

    return (
        <>
            {image && (
                <div className='songItem' onClick={handlePlay}>
                    <img className='songImage' src={image.url} alt='song' />

                    <div className='songInfo'>
                        <p className='songInfoName'>{name}</p>
                        <p className='songArtistName'>{!artists ? genres[0] : artists[0].name}</p>
                    </div>
                </div>
            )}
        </>
    )
}
