import React from "react";
import "../assets/css/App.css";
import Header from "../components/Header";
import SongList from "../components/SongList";
import SongDetails from "../components/SongDetails";
const App = () => {
  return (
    <div>
      <Header />
      <div className="songs_container">
        <div className="songList">
          <SongList />
        </div>
        <div className="songDetails">
          <SongDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
