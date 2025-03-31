// src/components/NavBar/NavBar.jsx


import { Link } from 'react-router';

const NavBar = () => {
    // src/components/NavBar/NavBar.jsx

    return (
        <nav>

            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/pokemon'>Pokemon</Link>
                </li>

                <li>
                    <Link to="/pokemon/new">New Pokemon</Link>
                </li>
            </ul>

        </nav>
    );

};

export default NavBar;
