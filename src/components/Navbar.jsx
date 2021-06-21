import React, { useState } from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {

    const [selected, setSelected] = useState('home')

    return (
        <div className='navbar'>
            <Link to='/home'>
                <p className={`${selected === 'home' ? 'selected' : ''}`} onClick={() => setSelected('home')}>
                    Home
                </p>
            </Link>
            <Link to='/recently-added'>
                <p className={`${selected === 'recently-added' ? 'selected' : ''}`} onClick={() => setSelected('recently-added')}>
                    Recently Added
                </p>
            </Link>
            <Link to='show-all'>
                <p className={`${selected === 'show-all' ? 'selected' : ''}`} onClick={() => setSelected('show-all')}>
                    Show All
                </p>
            </Link>
        </div>
    )
}

export default Navbar
