import "./App.css";

import Main from "./pages/Main";
import ShowBoard from "./pages/ShowBoard";
import { useState } from "react";

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
   
  const [route, setRoute] = useState('main');
  const [id, setId] = useState(0);

  let currentView = null;

  const changeRoute = (id = 0, route = "") => {
    setId(id);
    setRoute(route);
  };

    switch (route) {
      case 'main':
        currentView = <Main actualRoute={route} goto={changeRoute} datalist={datalist}/>;
       
        break;
      case 'showBoard':
        currentView = <ShowBoard goto={setRoute} id={id} datalist={datalist}/>;
        break;
    }

    return (
      <div className="App">{currentView}</div>
    );

  
}

export default App;
