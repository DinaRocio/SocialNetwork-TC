import "./App.css";

import Main from "./pages/Main";
import ShowBoard from "./pages/ShowBoard";
import React, { useState } from "react";
import generateKey from "./utils/generator";

const initialBoards = [
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
];

const initialList = [
  {
    id: 1,
    boardid: 1,
    title: "Food",
    // cards inicio
    cards: [
      {
        id: 1,
        title: "And for you with love<3",
        description: "none",
        tag: ["home", "hacer", "now"],
        comments: [
          {
            cardId: 1,
            commentId: 1,
            listId: 1,
            colaboratorId: 1,
            body: "Lorem Ipsum is simply dummy text ...",
          },
          {
            cardId: 1,
            commentId: 1,
            listId: 1,
            colaboratorId: 1,
            body: "Lorem Ipsum is simply dummy text ...",
          },
          {
            cardId: 1,
            commentId: 1,
            listId: 1,
            colaboratorId: 1,
            body: "Lorem Ipsum is simply dummy text ...",
          },
        ],
      },
      {
        id: 2,
        title: "WebSocket for real time",
        description: "none",
        tag: ["home", "tomorrow", "now"],
        comments: [],
      },
      {
        id: 3,
        title: "This is made by react",
        description: "none",
        tag: ["home", "tomorrow", "now"],
        comments: [],
      },
      {
        id: 4,
        title: "We use lambda too",
        description: "none",
        tag: ["home", "tomorrow", "now"],
        comments: [],
      },
      {
        id: 5,
        title: "SNS for notification",
        description: "none",
        tag: ["home", "tomorrow", "now"],
        comments: [],
      },
    ],
    // cards fin
  },
  {
    id: 80,
    boardid: 2,
    title: "Cleaning",
    // cards inicio
    cards: [
      {
        id: 1,
        title: "We use lambda too",
        description: "one desc",
        tag: ["home", "now"],
        comments: [
          {
            cardId: 1,
            commentId: 1,
            listId: 1,
            colaboratorId: 1,
            body: "new commentsssss",
          },
        ],
      },
    ],
    // cards fin
  },
  {
    id: 81,
    boardid: 3,
    title: "Food",
    // cards inicio
    cards: [
      {
        id: 1,
        title: "SNS for notification",
        description: "none",
        tag: ["home", "hacer", "now"],
        comments: [
          {
            cardId: 1,
            commentId: 1,
            listId: 1,
            colaboratorId: 1,
            body: "Lorem Ipsum is simply dummy text ...",
          },
          {
            cardId: 1,
            commentId: 1,
            listId: 1,
            colaboratorId: 1,
            body: "Lorem Ipsum is simply dummy text ...",
          },
          {
            cardId: 1,
            commentId: 1,
            listId: 1,
            colaboratorId: 1,
            body: "Lorem Ipsum is simply dummy text ...",
          },
        ],
      },
      {
        id: 1,
        title: "Lorem Ipsum is simply…",
        description: "none",
        tag: ["urgent", "hacer", "now"],
        comments: [
          {
            cardId: 2,
            commentId: 1,
            listId: 1,
            colaboratorId: 1,
            body: "a new one comment",
          },
        ],
      },
    ],
    // cards fin
  },
  {
    id: 83,
    boardid: 4,
    title: "SNS for notification",
    // cards inicio
    cards: [
      {
        id: 1,
        title: "nueva tarea de school",
        description: "none",
        tag: ["home", "urgent", "now"],
        comments: [
          {
            cardId: 1,
            commentId: 1,
            listId: 1,
            colaboratorId: 1,
            body: "a new comment",
          },
        ],
      },
    ],
    // cards fin
  },
  {
    id: 84,
    boardid: 5,
    title: "SNS for notification",
    // cards inicio
    cards: [
      {
        id: 1,
        title: "nueva tarea de school",
        description: "none",
        tag: ["home", "urgent", "now"],
        comments: [
          {
            cardId: 1,
            commentId: 1,
            listId: 1,
            colaboratorId: 1,
            body: "a new comment",
          },
        ],
      },
    ],
    // cards fin
  },
  {
    id: 84,
    boardid: 6,
    title: "SNS for notification",
    // cards inicio
    cards: [
      {
        id: 1,
        title: "nueva tarea de school",
        description: "none",
        tag: ["home", "urgent", "now"],
        comments: [
          {
            cardId: 1,
            commentId: 1,
            listId: 1,
            colaboratorId: 1,
            body: "a new comment",
          },
        ],
      },
    ],
    // cards fin
  },
];

export const ListContext = React.createContext();

function App() {
  const [databoard, setDataBoard] = useState(initialBoards);

  const [datalist, setDatalist] = useState(initialList);

  const [route, setRoute] = useState("main");
  const [id, setId] = useState(0);

  let currentView = null;

  const changeRoute = (id = 0, route = "") => {
    setId(id);
    setRoute(route);
  };

  switch (route) {
    case "main":
      currentView = (
        <Main actualRoute={route} goto={changeRoute} databoard={databoard} />
      );

      break;
    case "showBoard":
      currentView = (
        <ShowBoard
          goto={setRoute}
          id={id}
          databoard={databoard}
          setDataBoard={setDataBoard}
        />
      );
      break;
    default:
      currentView = null;
  }

  return (
    <ListContext.Provider
      value={{ datalist: datalist, setDatalist: setDatalist }}
    >
      <div className="App">{currentView}</div>
    </ListContext.Provider>
  );
}

export default App;
