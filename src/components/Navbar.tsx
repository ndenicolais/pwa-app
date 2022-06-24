import { Link } from 'react-router-dom';
import '/src/styles/Navbar.css';

function Navbar() {
    return (
        <div className='Navbar'>
            <ul>
                <li>
                <Link to="/">HOME</Link>
                </li>
                <li>
                <Link to="/about">ABOUT</Link>
                </li>
                <li>
                <Link to="/src/components/todo">TODO LIST</Link>
                </li>
                </ul>
                </div>
                )
            }

export default Navbar