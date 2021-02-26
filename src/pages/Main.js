import React from 'react';
import BoardItem from '../components/BoardItem';
import Header from '../components/header'
import "../stylesheets/Main.css";
import "../stylesheets/Colaborator.css";
import "../stylesheets/List.css";
import { useState } from 'react'
import ShowBoard from './ShowBoard';

function Main({goto}){
  
  const [datalist] = useState([
    {
      id: 1,
      title: "Todo for today",
      myBoards: true,
      colaboratorsPic: [
        "https://www.planeeo.com/wp-content/uploads/2020/09/louis-roze-trui-pink.jpg",
        "https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg",
        "https://breakyouout.com/wp-content/uploads/2018/08/Round-profile-2.png",
      ],
    },
    {
      id:2,
      title: "Todo for today 2",
      myBoards: false,
      colaboratorsPic: [
        "https://www.planeeo.com/wp-content/uploads/2020/09/louis-roze-trui-pink.jpg",
        "https://www.planeeo.com/wp-content/uploads/2020/09/louis-roze-trui-pink.jpg",
        "https://www.planeeo.com/wp-content/uploads/2020/09/louis-roze-trui-pink.jpg",
      ],
    },
    {
      id: 3,
      title: "Newww one",
      myBoards: true,
      colaboratorsPic: [
        "https://www.planeeo.com/wp-content/uploads/2020/09/louis-roze-trui-pink.jpg",
        "https://www.planeeo.com/wp-content/uploads/2020/09/louis-roze-trui-pink.jpg",
        "https://www.planeeo.com/wp-content/uploads/2020/09/louis-roze-trui-pink.jpg",
      ],
    },
    {
      id:4,
      title: "Newww false one",
      myBoards: false,
      colaboratorsPic: [
        "https://www.planeeo.com/wp-content/uploads/2020/09/louis-roze-trui-pink.jpg",
        "https://www.planeeo.com/wp-content/uploads/2020/09/louis-roze-trui-pink.jpg",
        "https://www.planeeo.com/wp-content/uploads/2020/09/louis-roze-trui-pink.jpg",
      ],
    },
    {
      id: 5,
      title: "Todo for today 3",
      myBoards: true,
      colaboratorsPic: [
        "https://www.planeeo.com/wp-content/uploads/2020/09/louis-roze-trui-pink.jpg",
        "https://www.planeeo.com/wp-content/uploads/2020/09/louis-roze-trui-pink.jpg",
        "https://www.planeeo.com/wp-content/uploads/2020/09/louis-roze-trui-pink.jpg",
      ],
    },
    {
      id:6,
      title: "Todo for today 4",
      myBoards: false,
      colaboratorsPic: [
        "https://www.planeeo.com/wp-content/uploads/2020/09/louis-roze-trui-pink.jpg",
        "https://www.planeeo.com/wp-content/uploads/2020/09/louis-roze-trui-pink.jpg",
        "https://www.planeeo.com/wp-content/uploads/2020/09/louis-roze-trui-pink.jpg",
      ],
    },
  ])

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

