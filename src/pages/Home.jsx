import React from 'react'
import Navbar from '../components/Navbar'
import Player from '../components/Player'
import "./Home.css"
function Home() {
    return (
        <div className='home'>
            <Navbar/>
            <div className="body">
                {/* <div className="body-nav">

                </div> */}
            </div>
            <Player/>
        </div>
    )
}

export default Home
