import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function videoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoFooterMusic__text">
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter__record"
        alt="Imagem de um vinil girando"
        src="https://cdn-icons-png.flaticon.com/512/702/702147.png?w=740&t=st=1680234279~exp=1680234879~hmac=63e50456ef830bf7a233ecf309c104650ad5e39ab1e0234912da753eccd66a0a"
      />
    </div>
  );
}

export default videoFooter;
