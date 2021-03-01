import React, { useState } from "react";
import Header from "../components/header";
import CardModal from "../components/CardModal";
import CreateListModal from "../components/CreateListModal";
import CreateColabModal from "../components/CreateColabModal";
import LogoutModal from "./../components/LogoutModal";
import "../stylesheets/CardModal.css";
import "../stylesheets/CreateListModal.css";
import { VscAdd } from "react-icons/vsc";

function ShowBoard({ goto, id, datalist }) {
  console.log(id);

  const boardId = datalist.filter((board) => board.id == id);

  const currentBoard = boardId[0];

  const [showLogout, setShowLogout] = useState(false);

  const [showCreateColab, setShowCreateColab] = useState(false);

  const [showCreateList, setShowCreateList] = useState(false);

  const [showCardModal, setShowCardModal] = useState(false);

  return (
    <>
      {showLogout && <LogoutModal onCancel={() => setShowLogout(false)} />}
      <Header goto={goto} onClick={() => setShowLogout(true)} />
      <section className="colaborator_section">
        <h2 className="boards_section__titles">{currentBoard.title}</h2>
        <div className="colaborator__reel">
          <ul className="colaborator_list">
            {showCreateColab && (
              <CreateColabModal onCancel={() => setShowCreateColab(false)} />
            )}
            <div className="create_colaborator">
              <VscAdd
                className="list__card-icon"
                onClick={() => setShowCreateColab(true)}
              />
            </div>
            {currentBoard.colaboratorsPic.map((pic) => {
              return (
                <li className="colaborator_item" key={Math.random()*1000}>
                  <div className="colaborator_picture">
                    <img src={pic} alt="pic" />
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
        <div className="list_card">
          <h2 className="list__card-title">Todo</h2>
          <ul className="list__card-group">
            {showCardModal && (
              <CardModal onCancel={() => setShowCardModal(false)} />
            )}
            <li className="card-list" onClick={() => setShowCardModal(true)} >
              <div className="list__card-item">Add social networks... </div>
            </li>
            <li className="card-list">
              <div className="list__card-item">Add social networks... </div>
            </li>
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
            <VscAdd className="action-icon" />
            <a href="add-card" className="addCardLink">
              Add new card
            </a>
          </div>
        </div>
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
            <VscAdd className="action-icon" />
            <a href="add-card" className="addCardLink">
              Add new card
            </a>
          </div>
        </div>
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
            <VscAdd className="action-icon" />
            <a href="add-card" className="addCardLink">
              Add new card
            </a>
          </div>
        </div>
      </section>
      {/* <CardModal /> */}
      {/* <CreateColabModal /> */}
    </>
  );
}
export default ShowBoard;
