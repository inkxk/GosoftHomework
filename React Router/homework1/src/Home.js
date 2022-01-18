import React from 'react'
import MyNavbar from './Navbar'
import './style.css';

function Home() {
    return (
        <>
            <MyNavbar />
            <div className='center'>
                <h1>Welcome to TodoLists</h1>
            </div>
        </>
    )
}

export default Home
