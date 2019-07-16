import React from "react";
import "../assets/css/SongList.css";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = props => {
  return props.songs.map(song => {
    return (
      <div key={song.title} className="song_container">
        <p className="song_name">{song.title}</p>
        <button
          onClick={() => props.selectSong(song)}
          className="song_select_btn"
        >
          Show details
        </button>
      </div>
    );
  });
};

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
