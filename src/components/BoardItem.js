import { store } from "./../store";
import LogoutModal from "./LogoutModal";
import "../stylesheets/LogoutModal.css";
import ShowBoard from "../pages/ShowBoard";
import { useState } from "react";
import { Link } from "react-router-dom";

function BoardItem({ goto, datalist }) {
  const myBoards = datalist.filter((board) => board.myBoards == true);
  const otherBoards = datalist.filter((board) => board.myBoards !== true);



  return (
    <>
      <section className="boards_section">
        <h2 className="boards_section__titles">My Boards</h2>
        <ul className="my_boards board_grid">
          {myBoards.map((myBoard) => {
            return (
              <li className="board_li" key={myBoard.id} >
                <div
                  className="boardItem"
                  onClick={() => goto(myBoard.id, "showBoard")}
                  // onClick={(id) => goto(myBoard.id,"showBoard")}
                >
                  <p className="board_text">{myBoard.title}</p>
                  <ul className="colaborator_list">
                    {myBoard.colaboratorsPic.map((pic) => {
                      return (
                        <li className="colaborator_item" key={Math.random()}>
                          <div className="colaborator_picture">
                            <img src={pic} alt="pic" />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <h2 className="boards_section__titles">Other Boards</h2>
        <ul className="other_boards board_grid">
          {otherBoards.map((otherBoard) => {
            return (
              <li className="board_li" key={otherBoard.id}>
                <div className="boardItem" onClick={() => goto(otherBoard.id, "showBoard")}>
                  <p className="board_text">{otherBoard.title}</p>
                  <ul className="colaborator_list">
                    {otherBoard.colaboratorsPic.map((pic) => {
                      return (
                        <li className="colaborator_item">
                          <div className="colaborator_picture">
                            <img src={pic} alt="pic" />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      {/* <LogoutModal /> */}
    </>
  );
}

export default BoardItem;
