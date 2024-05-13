import React from 'react'
import Img from '../../component/img/Img';
import { Link, NavLink } from 'react-router-dom';
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdMic } from "react-icons/io";
import logo from '../../images/videologo.png'
import profile from '../../images/profile.jpg'
import './Navbar.css';

const Navbar = () => {
  return (
    <section id='navbar'>
        <div className='container'>
            <div className='navbar-wrap'>
                <div className='navbar-logo-box'>
                    <div className='navbar-logo'>
                        <Img src={logo} />
                    </div>
                </div>
                <div className='head-nav-box'>
                    <header className='header-wrapper-flex'>
                        <div className='head-search-box-flex'>
                            <div className='search-input-box'>
                                <input className='head-search' type=" search" placeholder="search" />
                            </div>
                            <div className='search-voice-box'>
                                <IoMdMic className='search-vouce' />
                            </div>
                        </div>
                        <div className='head-profile-box-flex'>
                            <div className='head-profile-login-box'>
                                <Link className='head-profile-login' to='login'>login</Link>
                            </div>
                            <div className='head-notification-box'>
                                 <IoMdNotificationsOutline className='head-notification' />
                            </div>
                            <div className='head-profile-box'>
                                <Img src={profile} />
                            </div>
                        </div>
                    </header>
                    <nav className='nav-box'>
                        <ul className='nav-route'>
                            <li>
                                <NavLink to="/">all</NavLink>
                            </li>
                            <li>
                                <NavLink to="music">music</NavLink>
                            </li>
                            <li>
                                <NavLink to="sciencefiction">science-fiction</NavLink>
                            </li>
                            <li>
                                <NavLink to="gaming">gaming</NavLink>
                            </li>
                            <li>
                                <NavLink to="lofi">lo-fi</NavLink>
                            </li>
                            <li>
                                <NavLink to="tseries">t-series</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar