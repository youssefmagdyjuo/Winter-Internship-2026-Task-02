import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNavBar } from '../features/puplic/navBar.js';
export default function SideNavBar() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.navBar.isOpen);
    const location = useLocation();
    const [links, setLinks] = React.useState([
        { name: 'Home', path: '/', icon: 'fa-home' },
        { name: 'Products', path: '/products', icon: 'fa-bag-shopping' },
        { name: 'About', path: '/about', icon: 'fa-info-circle' },
        { name: 'Contact', path: '/contact', icon: 'fa-phone' },
        { name: 'Login', path: '/login-signup', icon: 'fa-user' },
    ]);
    const isActiveLink = (path) => location.pathname === path;

    return (
        <div className={`side_navbar_container ${isOpen ? '' : 'navBar_closed'}`}>
            <nav className='side_navbar'>
                <ul className='side_navbar_links'>
                    {links.map((link, index) => (
                        <Link to={link.path} key={index}>
                            <li className={`link ${isActiveLink(link.path) ? 'active_link' : ''}`} 
                            onClick={() => { if (window.innerWidth < 1024) {dispatch(toggleNavBar());}}}>
                                
                                <i className={` fa-solid ${link.icon} mr-2`}></i>
                                {link.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
