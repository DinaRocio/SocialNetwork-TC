import React from 'react';
import "../stylesheets/Header.css";

function Header(){
  return (
    <header className="header">
    <div className="left-elements">
      <a href="#home" className="js-to-home-link" >
        <i className="fas fa-home"></i>
      </a>
      <div className="bars">
        <span className="long_bar"></span>
        <span className="small_bar"></span>
      </div>
    </div>
    <div className="profile_icon">YL</div>
  </header>
  )
}
export default Header

// onClick={() => goto("showBoard")