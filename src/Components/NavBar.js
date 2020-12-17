import React from 'react';
import '../App.css';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

export default function NavBar() {
  return (
    <div className="nav-container">
      <div className="icon-container">
        <div className="icon">
            <HomeIcon />
            <p>Home</p>
        </div>
        <div className="icon">
            <FlashOnIcon />
            <p>Flash</p>
        </div>
        <div className="icon">
            <LiveTvIcon />
            <p>Live</p>
        </div>
        <div className="icon">
            <SearchIcon />
            <p>Search</p>
        </div>
        <div className="icon">
            <VideoLibraryIcon />
            <p>Video</p>
        </div>
        <div className="icon">
            <PersonOutlineIcon />
            <p>Person</p>
        </div>

        <div className="icon">
          <img alt = "hulu-logo" src = "https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" />
        </div>
      </div>
      
      
    </div>
  )
}
