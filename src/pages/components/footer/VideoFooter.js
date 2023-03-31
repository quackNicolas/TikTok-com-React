import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function videoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@Nicolas</h3>
        <p>Esse é o título do respectivo vídeo.</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoFooterMusic__text">
            <p>Título da música</p>
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
