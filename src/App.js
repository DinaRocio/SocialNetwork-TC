import "./App.css";

import Main from "./pages/Main";
import ShowBoard from "./pages/ShowBoard";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header";

function App() {
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
      id: 2,
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
      id: 4,
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
      id: 6,
      title: "Todo for today 4",
      myBoards: false,
      colaboratorsPic: [
        "https://www.planeeo.com/wp-content/uploads/2020/09/louis-roze-trui-pink.jpg",
        "https://www.planeeo.com/wp-content/uploads/2020/09/louis-roze-trui-pink.jpg",
        "https://www.planeeo.com/wp-content/uploads/2020/09/louis-roze-trui-pink.jpg",
      ],
    },
  ]);

  const [route, setRoute] = useState('main')

    let currentView = null;

    switch (route) {
      case 'main':
        currentView = <Main goto={setRoute} datalist={datalist} />;

        break;
      case 'showBoard':
        currentView = <ShowBoard goto={setRoute} datalist={datalist}/>;
        break;
    }

    return (
      <div className="App">{currentView}</div>
    );

  
}

export default App;
