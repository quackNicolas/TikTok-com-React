import React, { useState } from "react";
import "./videoSideBar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSideBar({likes, messages, shares}) {

    const [liked, setLike] = useState(false)

    function handllerLike() {
        setLike(!liked)
    }

  return (
    <div className="videoSideBar">
      <div 
        className="videoSideBar__options"
        onClick={handllerLike}
      >
        { liked ? <FavoriteIcon fontSize="large"/> : <FavoriteBorderIcon fontSize="large" />}
        <p> { liked ? likes + 1 : likes} </p>
      </div>
      <div className="videoSideBar__options">
        <ChatIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSideBar__options">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSideBar;
