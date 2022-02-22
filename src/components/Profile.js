import '../styles/Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setUser } from '../redux/actions/spotifyActions'
import { ReactComponent as LinkIcon } from '../assets/linkIcon.svg'
import axios from 'axios'

const spotify = axios.create({
    baseURL: 'https://api.spotify.com/v1',
})

export default function Profile() {
    const token = useSelector((state) => state.spotify.token)
    const user = useSelector((state) => state.spotify.user)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchUserDetail = async (accessToken) => {
            try {
                const response = await spotify.get('/me', {
                    headers: { Authorization: `'Bearer ${accessToken}'` },
                })
                console.log(response.data)
                dispatch(setUser(response.data))
            } catch (e) {
                console.error(e)
            }
        }
        fetchUserDetail(token)
    }, [token, dispatch])

    return (
        <div className='main'>
            <h1>Profile</h1>
            {user && (
                <div className='profile'>
                    <img src={user.images['0'].url} alt='profile' />
                    <div className='profileInfo'>
                        <h1>{user.display_name}</h1>
                        <a
                            className='link'
                            href={user.external_urls.spotify}
                            target='_blank'
                            rel='noreferrer'
                        >
                            Open in spotify
                            <LinkIcon
                                style={{ marginLeft: '6px' }}
                                fill='#fff'
                                width='24px'
                                height='24px'
                            />
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}
