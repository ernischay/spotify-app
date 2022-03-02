import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SpotifyPlayer from 'react-spotify-web-playback'
import '../styles/Footer.css'

export default function Footer() {
    const token = useSelector((state) => state.spotify.token)
    const trackUri = useSelector((state) => state.spotify.trackUri)
    const [play, setPlay] = useState(false)

    useEffect(() => {
        setPlay(true)
    }, [trackUri])

    return (
        <SpotifyPlayer
            token={token}
            showSaveIcon
            callback={(state) => {
                if (!state.isPlaying) setPlay(false)
            }}
            play={play}
            uris={trackUri ? [trackUri] : []}
        />
    )
}
