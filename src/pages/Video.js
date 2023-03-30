import React from 'react'
import "./video.css"

function Video() {
  return (
    <div className='video'>
        <video 
          className='video__player'
          src = "https://www.tiktok.com/63ad6f3c-1a49-4bc4-90cc-b73d3ff4978d"
        >

        </video>
    </div>
  )
}

export default Video