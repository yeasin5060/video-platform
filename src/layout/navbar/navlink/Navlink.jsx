import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navlink = () => {
  return (
    <div className='container'>
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
  )
}

export default Navlink