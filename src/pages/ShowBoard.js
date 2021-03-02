import React, { useContext, useState } from "react";
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
import { ListContext } from "../App";

function ShowBoard({ goto, id, databoard, setDataBoard }) {
  const context = useContext(ListContext);

  const currentBoard = databoard.find((board) => board.id === id);

  const [card, setCard] = useState();

  const list = context.datalist.filter(
    (list) => list.boardid === currentBoard.id
  );

  console.log(list);

  const handleCreateColaborator = (e) => {
    e.preventDefault();
    const newColaborator = {
      id: generateKey(),
      username: "Susan",
      email: e.target.email.value,
      picture:
        "https://image.flaticon.com/icons/png/512/64/64495.png",
    };
    setDataBoard((old) => {
      return old.map((board) => {
        if (board.id !== currentBoard.id) return board;
        return {
          ...board,
          colaborators: [...board.colaborators, newColaborator],
        };
      });
    });
  };

  const handleCreateList = (e) => {
    e.preventDefault();
    const newList = {
      id: generateKey(),
      boardid: id,
      title: e.target.list_name.value,
      cards: [],
    };
    context.setDatalist([...context.datalist, newList]);
  };

  const handleCreateCard = (e) => {
    e.preventDefault();
    const newCard = {
      id: generateKey(),
      title: e.target.cardtitle.value,
      description: e.target.description.value,
      tag: ["new"],
      comments: [],
    };
    context.setDatalist((old) => {
      return old.map((listItem) => {
        if (listItem.id !== list[0].id) return listItem;
        return {
          ...listItem,
          cards: [...listItem.cards, newCard],
        };
      });
    });
  };

  const [showLogout, setShowLogout] = useState(false);

  const [showCreateColab, setShowCreateColab] = useState(false);

  const [showCreateList, setShowCreateList] = useState(false);

  const [showCardModal, setShowCardModal] = useState(false);

  const [showCreateCardModal, setShowCreateCardModal] = useState(false);

  // useEffect(() => {

  // }, [card])

  return (
    <>
      {showCardModal && (
        <CardModal card={card} onCancel={() => setShowCardModal(false)} />
      )}
      {showLogout && <LogoutModal onCancel={() => setShowLogout(false)} />}
      <Header goto={goto} onClick={() => setShowLogout(true)} />
      <section className="colaborator_section">
        <h2 className="boards_section__titles">{currentBoard.title}</h2>
        <div className="colaborator__reel">
          {showCreateColab && (
            <CreateColabModal
              onSubmit={handleCreateColaborator}
              onCancel={() => setShowCreateColab(false)}
            />
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
          <CreateListModal
            onSubmit={handleCreateList}
            onCancel={() => setShowCreateList(false)}
          />
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
                {listItem.cards.map((card) => {
                  return (
                    <li
                      className="card-list"
                      key={card.cardId}
                      onClick={() => {
                        setCard(card);
                        setShowCardModal(true);
                      }}
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
                    onSumit={handleCreateCard}
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
