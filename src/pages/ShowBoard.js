import React, { useState } from "react";
import Header from "../components/header";
import CardModal from "../components/CardModal";
import CreateListModal from "../components/CreateListModal";
import CreateColabModal from "../components/CreateColabModal";
import CreateCardModal from "./../components/CreateCardModal";
import LogoutModal from "./../components/LogoutModal";
import "../stylesheets/CardModal.css";
import "../stylesheets/CreateListModal.css";
import { VscAdd } from "react-icons/vsc";
import generateKey from "../utils/generator";

function ShowBoard({ goto, id, databoard, setDataBoard }) {
  console.log(databoard);

  const currentBoard = databoard.find((board) => board.id === id);

  // const [ddatacolab] =

  const [datalist] = useState([
    {
      id: generateKey(),
      boardid: 1,
      title: "Food",
      // cards inicio
      cards: [
        {
          id: 1,
          title: "new task",
          description: "none",
          tag: ["home", "hacer", "now"],
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
        {
          id: 1,
          title: "nueva card jojolete",
          description: "none",
          tag: ["home", "hacer", "now"],
          comments: [
            {
              cardId: 2,
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
      id: 69,
      boardid: 1,
      title: "School",
      // cards inicio
      cards: [
        {
          id: 1,
          title: "new task",
          description: "none",
          tag: ["home", "hacer", "now"],
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
  ]);

  const list = datalist.filter((list) => list.boardid === currentBoard.id);

  // console.log(list);

  const handleCreateColaborator = (e) => {
    e.preventDefault();
    const newColaborator = {
      id: generateKey(),
      username: "Susan",
      email: e.target.email.value,
      picture:
      "https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg",
    }
    setDataBoard((old)=> {
      return (
        old.map((board)=> {
          if (board.id !== currentBoard.id) return board
          return {...board, colaborators: [...board.colaborators, newColaborator]}
        })
      )
    })
  }

  const [showLogout, setShowLogout] = useState(false);

  const [showCreateColab, setShowCreateColab] = useState(false);

  const [showCreateList, setShowCreateList] = useState(false);

  const [showCardModal, setShowCardModal] = useState(false);

  const [showCreateCardModal, setShowCreateCardModal] = useState(false);

  return (
    <>
      {showLogout && <LogoutModal onCancel={() => setShowLogout(false)} />}
      <Header goto={goto} onClick={() => setShowLogout(true)} />
      <section className="colaborator_section">
        <h2 className="boards_section__titles">{currentBoard.title}</h2>
        <div className="colaborator__reel">
          {showCreateColab && (
            <CreateColabModal onSubmit={handleCreateColaborator} onCancel={() => setShowCreateColab(false)} />
          )}
          <ul className="colaborator_list">
            <li className="create_colaborator" key={1}>
              <VscAdd
                className="list__card-icon"
                onClick={() => setShowCreateColab(true)}
              />
            </li>
            {currentBoard.colaborators.map((colaborator) => {
              return (
                <li className="colaborator_item" key={colaborator.id}>
                  <div className="colaborator_picture">
                    <img src={colaborator.picture} alt="pic" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="list_section">
        {showCreateList && (
          <CreateListModal onCancel={() => setShowCreateList(false)} />
        )}
        <div className="create_list" onClick={() => setShowCreateList(true)}>
          <VscAdd className="create_list-icon" />
        </div>
        {list.map((listItem) => {
          return (
            <div className="list_card">
              <h2 className="list__card-title" key={listItem.id}>
                {listItem.title}
              </h2>
              <ul className="list__card-group">
                {showCardModal && (
                  <CardModal onCancel={() => setShowCardModal(false)} />
                )}
                {listItem.cards.map((card) => {
                  return (
                    <li
                      className="card-list"
                      key={card.cardId}
                      onClick={() => setShowCardModal(true)}
                    >
                      <div className="list__card-item">{card.title} </div>
                    </li>
                  );
                })}
              </ul>

              <div className="action-buttons">
                {showCreateCardModal && (
                  <CreateCardModal
                    onCancel={() => setShowCreateCardModal(false)}
                  />
                )}
                <VscAdd
                  className="action-icon"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowCreateCardModal(true);
                  }}
                />

                <a
                  href="add-card"
                  className="addCardLink"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowCreateCardModal(true);
                  }}
                >
                  Add new card
                </a>
              </div>
            </div>
          );
        })}

        <div className="list_card">
          <h2 className="list__card-title">Todo</h2>
          <ul className="list__card-group">
            <li className="card-list">
              <div className="list__card-item">Add social networks... </div>
            </li>
            <li className="card-list">
              <div className="list__card-item">Add social networks... </div>
            </li>
            <li className="card-list">
              <div className="list__card-item">Add social networks... </div>
            </li>
          </ul>
          <div className="action-buttons">
            {showCreateCardModal && (
              <CreateCardModal onCancel={() => setShowCreateCardModal(false)} />
            )}
            <VscAdd
              className="action-icon"
              onClick={(e) => {
                e.preventDefault();
                setShowCreateCardModal(true);
              }}
            />

            <a
              href="add-card"
              className="addCardLink"
              onClick={(e) => {
                e.preventDefault();
                setShowCreateCardModal(true);
              }}
            >
              Add new card
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default ShowBoard;
