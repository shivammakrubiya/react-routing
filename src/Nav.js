import './App.css';
import { Link } from 'react-router-dom'
function Nav() {
    const navStyle = {
        color: 'black',
        fontWeight: 900
    }
    return (
        <nav>
            <Link to={'/'} style={navStyle}>
                Logo
            </Link>
            <ul className='nav-links'>
                <Link to={'/about'} style={navStyle}>
                    About
                </Link>
                <Link to={'/shop'} style={navStyle}>
                    Shop
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;