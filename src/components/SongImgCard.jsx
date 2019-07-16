import React from "react";
import { connect } from "react-redux";
import "../assets/css/SongImgCard.css";

const SongImgCard = props => {
  return (
    <div className="img_container">
      <img src={props.song.imgLink} alt="album-pic" />
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongImgCard);
