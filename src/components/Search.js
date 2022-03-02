import '../styles/Search.css'
import { ReactComponent as SearchIcon } from '../assets/searchIcon.svg'
import { ReactComponent as CrossIcon } from '../assets/crossIcon.svg'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchResult } from '../redux/actions/spotifyActions'
import SearchResult from './SearchResult'
import { spotify } from '../spotify.config'

export default function Search() {
    const [text, setText] = useState('')
    const [option, setOption] = useState('artist,album,track')
    const token = useSelector((state) => state.spotify.token)
    const results = useSelector((state) => state.spotify.results)
    const dispatch = useDispatch()

    const handleTextChange = (e) => {
        setText(e.target.value)
        if (e.target.value === '') {
            dispatch(setSearchResult(null))
            setOption('artist,album,track')
        }
    }

    useEffect(() => {
        const fetchSearchResult = async (accessToken) => {
            const params = new URLSearchParams({
                q: text,
                type: option,
                limit: 4,
            })
            try {
                const searchResponse = await spotify.get(`/search?${params}`, {
                    headers: { Authorization: `'Bearer ${accessToken}'` },
                })
                dispatch(setSearchResult(searchResponse.data))
            } catch (e) {
                console.error(e)
            }
        }
        if (text.length > 0) {
            fetchSearchResult(token)
        } else {
            dispatch(setSearchResult(null))
        }
    }, [text, token, option, dispatch])

    const handleOption = (e) => {
        setOption(e.currentTarget.value)
    }

    return (
        <div className='main'>
            <div className='input-group'>
                <SearchIcon fill='#fff' width='24px' height='24px' />
                <input type='text' placeholder='Search for artists, music and genres...' onChange={handleTextChange} value={text} />
                {text && (
                    <CrossIcon
                        fill='#fff'
                        width='24px'
                        height='24px'
                        cursor='pointer'
                        onClick={() => {
                            setText('')
                            setOption('artist,album,track')
                        }}
                    />
                )}
            </div>
            {text && (
                <ul className='optionSelect'>
                    <li key='artist'>
                        <input id='artist' type='radio' checked={option === 'artist'} onChange={handleOption} value='artist' />
                        <label htmlFor='artist'>artist</label>
                    </li>
                    <li key='album'>
                        <input id='album' type='radio' checked={option === 'album'} onChange={handleOption} value='album' />
                        <label htmlFor='album'>album</label>
                    </li>
                    <li key='track'>
                        <input id='track' type='radio' checked={option === 'track'} onChange={handleOption} value='track' />
                        <label htmlFor='track'>track</label>
                    </li>
                </ul>
            )}
            {results && <SearchResult />}
        </div>
    )
}
