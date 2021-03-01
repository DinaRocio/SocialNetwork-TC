import React from 'react';
import "../stylesheets/Header.css";
import HomeButton from './HomeButton';

function Header({onClick, goto, actualRoute}){

  
 
  
  return (
    <header className="header">
    <div className="left-elements">
      
      {actualRoute==="main" ? "" : <HomeButton goto={goto} />}
      <div className="bars">
        <span className="long_bar"></span>
        <span className="small_bar"></span>
      </div>
    </div>
    <div onClick={(e) => {
            e.preventDefault();
            onClick();
          }} className="profile_icon">YL</div>
  </header>
  )
}
export default Header

// onClick={() => goto("showBoard")