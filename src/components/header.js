import React from 'react';
import "../stylesheets/Header.css";
import { FiHome } from "react-icons/fi"; 

function Header({goto}){
  return (
    <header className="header">
    <div className="left-elements">
      {/* aqui falta preguntar que si es que currentView = 'main', el contenido de abajo no aparezca */}
      <a href="#home" className="js-to-home-link" >
        <FiHome className="home-button" onClick={() => goto('main')}/>
        
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