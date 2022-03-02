import { useSelector } from 'react-redux'
import SongItem from './SongItem'

export default function SearchResult() {
    const results = useSelector((state) => state.spotify.results)

    return (
        <>
            {results && (
                <div className='searchResult'>
                    {results.albums?.items?.map((album) => (
                        <SongItem key={album.id} song={album} uri={album.uri} name={album.name} />
                    ))}
                    {results.artists?.items?.map((artist) => (
                        <SongItem key={artist.id} song={artist} uri={artist.uri} name={artist.name} />
                    ))}
                    {results.tracks?.items?.map((track) => (
                        <SongItem key={track.id} song={track} uri={track.uri} name={track.name} />
                    ))}
                </div>
            )}
        </>
    )
}
