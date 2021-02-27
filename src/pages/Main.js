import React from 'react';
import BoardItem from '../components/BoardItem';
import Header from '../components/header'
import "../stylesheets/Main.css";
import "../stylesheets/Colaborator.css";
import "../stylesheets/List.css";
import { useState } from 'react'
import ShowBoard from './ShowBoard';

function Main({goto, datalist}){



  return(
    <>
    
    <Header  />
    
    <main className="main_section">
        <BoardItem goto={goto} datalist={datalist} />
    </main>
    </>
  )
}

export default Main;

