import React from 'react';
import BoardItem from '../components/BoardItem';
import Header from '../components/header'
import "../stylesheets/Main.css";
import "../stylesheets/Colaborator.css";
import "../stylesheets/List.css";

function Main({goto}){
  return(
    <>
    <Header/>
    <main className="main_section">
        <BoardItem goto={goto} />
    </main>
    </>
  )
}

export default Main;

