import logo from '../assets/logo.png'
import { loginUrl } from '../spotify.config'

export default function Login() {
    return (
        <div className='login'>
            <img className='sidebarLogo' src={logo} alt='spotify' />
            <a className='link' href={loginUrl}>
                Login With Spotify
            </a>
        </div>
    )
}
