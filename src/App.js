import "./App.css";

import Main from "./pages/Main";
import ShowBoard from "./pages/ShowBoard";
import { useState } from "react";
import generateKey from "./utils/generator";

function App() {
  const [databoard, setDataBoard] = useState([
    {
      id: 1,
      title: "Todo for today",
      myBoards: true,
      colaborators: [
        {
          id: generateKey(),
          username: "Susan",
          email: "susan@core.com",
          picture:
          "https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg",
        },
        {
          id: generateKey(),
          username: "Susan",
          email: "susan@core.com",
          picture:
          "https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg",
        },
        {
          id: generateKey(),
          username: "Susan",
          email: "susan@core.com",
          picture:
          "https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg",
        },
      ],
    },
    {
      id: 2,
      title: "Todo for today 2",
      myBoards: false,
      colaborators: [
        {
          id: generateKey(),
          username: "Susan",
          email: "susan@core.com",
          picture:
          "https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg",
        },
        {
          id: generateKey(),
          username: "Susan",
          email: "susan@core.com",
          picture:
          "https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg",
        },
        {
          id: generateKey(),
          username: "Susan",
          email: "susan@core.com",
          picture:
          "https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg",
        },
      ],
    },
    {
      id: 3,
      title: "Newww one",
      myBoards: true,
      colaborators: [
        {
          id: generateKey(),
          username: "Susan",
          email: "susan@core.com",
          picture:
          "https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg",
        },
        {
          id: generateKey(),
          username: "Susan",
          email: "susan@core.com",
          picture:
          "https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg",
        },
        {
          id: generateKey(),
          username: "Susan",
          email: "susan@core.com",
          picture:
          "https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg",
        },
      ],
    },
    {
      id: 4,
      title: "Newww false one",
      myBoards: false,
      colaborators: [
        {
          id: generateKey(),
          username: "Susan",
          email: "susan@core.com",
          picture:
          "https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg",
        },
        {
          id: generateKey(),
          username: "Susan",
          email: "susan@core.com",
          picture:
          "https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg",
        },
        {
          id: generateKey(),
          username: "Susan",
          email: "susan@core.com",
          picture:
          "https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg",
        },
      ],
    },
    {
      id: 5,
      title: "Todo for today 3",
      myBoards: true,
      colaborators: [
        {
          id: generateKey(),
          username: "Susan",
          email: "susan@core.com",
          picture:
          "https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg",
        },
        {
          id: generateKey(),
          username: "Susan",
          email: "susan@core.com",
          picture:
          "https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg",
        },
        {
          id: generateKey(),
          username: "Susan",
          email: "susan@core.com",
          picture:
          "https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg",
        },
      ],
    },
    {
      id: 6,
      title: "Todo for today 4",
      myBoards: false,
      colaborators: [
        {
          id: generateKey(),
          username: "Susan",
          email: "susan@core.com",
          picture:
          "https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg",
        },
        {
          id: generateKey(),
          username: "Susan",
          email: "susan@core.com",
          picture:
          "https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg",
        },
        {
          id: generateKey(),
          username: "Susan",
          email: "susan@core.com",
          picture:
          "https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg",
        },
      ],
    },
  ]);
   
  const [route, setRoute] = useState('main');
  const [id, setId] = useState(0);

  let currentView = null;

  const changeRoute = (id = 0, route = "") => {
    setId(id);
    setRoute(route);
  };

    switch (route) {
      case 'main':
        currentView = <Main actualRoute={route} goto={changeRoute} databoard={databoard} />;
       
        break;
      case 'showBoard':
        currentView = <ShowBoard goto={setRoute} id={id} databoard={databoard} setDataBoard={setDataBoard}/>;
        break;
        default:
          currentView = null
    }

    return (
      <div className="App">{currentView}</div>
    );

  
}

export default App;
