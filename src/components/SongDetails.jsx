import React from "react";
import { connect } from "react-redux";
import "../assets/css/SongDetails.css";
import SongImgCard from "./SongImgCard";

const SongDetails = ({ song }) => {
  if (!song) {
    return <h1 className="alert">Please Select a Song First</h1>;
  }

  return (
    <div className="song_details_container">
      <h1 className="song_header">Details of Selected Song</h1>
      <div className="song_wrapper">
        <div className="song_content">
          <h2 className="song_title">
            Name: <span>{song.title}</span>
          </h2>
          <h2 className="song_artist">
            Artist: <span>{song.artist}</span>
          </h2>
          <p className="song_duration">
            Duration: <span>{song.length} min</span>
          </p>
        </div>
        <SongImgCard />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
