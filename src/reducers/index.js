import { combineReducers } from "redux";
import img1 from "../assets/img/Camila-Cabello-Shawn-Mendes-Señorita-Behind--Scenes.jpg";
import img2 from "../assets/img/idon`tCare.png";
import img3 from "../assets/img/beautiful_people.jpg";
import img4 from "../assets/img/Hold Me While You Wait.jpg";
import img5 from "../assets/img/old_town_road.jpeg";

const songsReducer = () => {
  return [
    {
      title: "Señorita",
      artist: " Shawn Mendes & Camila Cabello",
      length: "3.40",
      imgLink: img1
    },
    {
      title: "I Don't Care",
      artist: " Ed Sheeran & Justin Bieber",
      length: "3.20",
      imgLink: img2
    },
    {
      title: "Beautiful People",
      artist: "Khalid",
      length: "4.00",
      imgLink: img3
    },
    {
      title: "Hold Me While You Wait",
      artist: " Lewis Capald",
      length: "3.10",
      imgLink: img4
    },
    {
      title: "Old Town Road",
      artist: "Billy Ray Cyrus",
      length: "4.20",
      imgLink: img5
    }
  ];
};

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  } else {
    return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer
});
