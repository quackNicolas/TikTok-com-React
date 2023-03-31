import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import "./video.css";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if(play) {
      videoRef.current.pause()
      setPlay(false)
    } else {
      videoRef.current.play();
      setPlay(true)
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://v4.cdnpk.net/videvo_files/video/free/2019-01/large_watermarked/190111_04_TaksinBridge_Drone_02_preview.mp4"
      >

      </video>
      <VideoFooter />
    </div>
  );
}

export default Video;
