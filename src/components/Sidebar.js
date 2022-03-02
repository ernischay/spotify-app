import logo from '../assets/logo.png'
import '../styles/Sidebar.css'
import { ReactComponent as HomeIcon } from '../assets/homeIcon.svg'
import { ReactComponent as ProfileIcon } from '../assets/profileIcon.svg'
import { ReactComponent as SearchIcon } from '../assets/searchIcon.svg'
import { ReactComponent as PlaylistIcon } from '../assets/playlistIcon.svg'
import { ReactComponent as LogoutIcon } from '../assets/logoutIcon.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { setAccessToken } from '../redux/actions/spotifyActions'
import { useDispatch } from 'react-redux'

export default function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    return (
        <div className='sidebar'>
            <img className='sidebarLogo' src={logo} alt='spotify' />
            <ul className='sidebarItems'>
                <li className={location.pathname === '/' ? 'sidebarItemActive' : 'sidebarItem'} onClick={() => navigate('/')}>
                    <HomeIcon fill={location.pathname === '/' ? '#1db954' : '#fff'} width='24px' height='24px' />
                    <p className='sidebarItemName'>Home</p>
                </li>
                <li className={location.pathname === '/profile' ? 'sidebarItemActive' : 'sidebarItem'} onClick={() => navigate('/profile')}>
                    <ProfileIcon fill={location.pathname === '/profile' ? '#1db954' : '#fff'} width='24px' height='24px' />
                    <p className='sidebarItemName'>Profile</p>
                </li>
                <li className={location.pathname === '/search' ? 'sidebarItemActive' : 'sidebarItem'} onClick={() => navigate('/search')}>
                    <SearchIcon fill={location.pathname === '/search' ? '#1db954' : '#fff'} width='24px' height='24px' />
                    <p className='sidebarItemName'>Search</p>
                </li>
                <li className={location.pathname === '/playlist' ? 'sidebarItemActive' : 'sidebarItem'} onClick={() => navigate('/playlist')}>
                    <PlaylistIcon fill={location.pathname === '/playlist' ? '#1db954' : '#fff'} width='24px' height='24px' />
                    <p className='sidebarItemName'>Featured Playlist</p>
                </li>
                <li className='sidebarItem' onClick={() => dispatch(setAccessToken(null))}>
                    <LogoutIcon fill='#fff' width='24px' height='24px' />
                    <p className='sidebarItemName'>Logout</p>
                </li>
            </ul>
        </div>
    )
}
