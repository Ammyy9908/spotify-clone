import React from 'react'
import "./Player.css"
import HeartIcon from '../assets/HeartIcon'
import PlaylistAddIcon from '../assets/PlaylistAddIcon'
import ListIcon from '../assets/ListIcon'
import PrevIcon from '../assets/PrevIcon'
import PlayIcon from '../assets/PlayIcon'
import NextIcon from '../assets/NextIcon'
import {MdPause,MdPlayArrow} from "react-icons/md"
function Player() {

    const [liked,setLiked] = React.useState(false);
    const [isPlay,setPlay] = React.useState(false);


    return (
        <div className='player'>
            <div className="player-wrapper">
                <div className="current-song-meta">
                    <div className="player-thumb"></div>
                    <div className="player-song-info">
                        <div className="song-info">
                            <h3 className="song-name">No ones knows</h3>
                            <span className='artist-name'>Queens of the Stone Age</span>
                        </div>
                        <button className="heart-btn" onClick={()=>{
                            setLiked(!liked)
                        }}>
                            <HeartIcon isLiked={liked}/>
                        </button>
                        <button><PlaylistAddIcon/></button>
                        <button><ListIcon/></button>
                    </div>
                   
                </div>
                <div className="song-progress-nav">
                    <div className="player-control">
                        <button className="prev-btn"><PrevIcon/></button>
                        <button className='play-btn' onClick={()=>{
                            setPlay(!isPlay)
                        }}>{!isPlay?<MdPlayArrow/>:<MdPause/>}</button>
                        <button className='next-btn'><NextIcon/></button>
                    </div>
                    <div className="progress-bar">
                        <span className="elapsed-time">1:42</span>
                        <div className="progress-frame">
                            <div className="progress-value"></div>
                        </div>
                        <span className="total-duration">4:00</span>
                    </div>
                </div>


                <div className="song-control">
                    <button className="device-btn">
                        <img src="./device.svg" alt="" />
                    </button>
                    <div className="volume-controller">
                        <button className="speaker-btn">
                            <img src="./speaker.svg" alt="" />
                        </button>
                        <div className="volume-bar">
                            <div className="volume-bar-value"></div>
                        </div>
                       
                    </div>
                    <button className="expand-btn">
                            <img src="./expand.svg" alt="" />
                        </button>
                </div>
            </div>
        </div>
    )
}

export default Player
