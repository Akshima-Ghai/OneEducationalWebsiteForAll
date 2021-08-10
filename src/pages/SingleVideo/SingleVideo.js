import React from 'react'
import './SingleVideo.css'

function SingleVideo() {
    return (
        <div className="video__player--container">
            <h1 className="video__player--head" >30- day Contribution program | Workflow | Advantages | DevIncept</h1>
            <iframe 
                className="video__player" 
                src="https://www.youtube.com/embed/JC5uS-Kju4M" 
                allowFullScreen
            >
            </iframe>
        </div>
    )
}

export default SingleVideo
