import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Header({title}){
    return(
        <header className='header'>
            <h1 className='header-title'>{title}</h1>
            <nav className='header-nav'>
                <ul className='header-nav-list'>
                    <li className='header-nav-list-item'><Link to="/" style={{color:"black"}}>Home</Link></li>
                    <li className='header-nav-list-item'><Link to="/about" style={{color:"black"}}>About</Link></li>
                    <li className='header-nav-list-item'><Link to="/post" style={{color:"black"}}>POST</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header