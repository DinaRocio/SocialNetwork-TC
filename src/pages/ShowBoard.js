import React from "react";
import Header from "../components/header";
import CardModal from "../components/CardModal"
import CreateListModal from "../components/CreateListModal"
import "../stylesheets/CardModal.css"; 
import "../stylesheets/CreateListModal.css";
import { VscAdd } from "react-icons/vsc";

function ShowBoard({goto, datalist}) {


  return (
    <>
      <Header goto={goto} />
      <section className="colaborator_section">
        <h2 className="boards_section__titles">Todo for today</h2>
        <div className="colaborator__reel">
          <ul className="colaborator_list">
          <div class="create_colaborator">
          <VscAdd class="list__card-icon" />
          </div>
            <li className="colaborator_item">
              <div className="colaborator_picture">
                <img
                  src={
                    "https://www.labreabakery.com/sites/default/files/styles/teaser/public/2018-04/Melissa%20Trimmer%20Headshot-cropped-730.png?itok=0HnVg9_P"
                  }
                  alt="pic"
                />
              </div>
            </li>
            <li className="colaborator_item">
              <div className="colaborator_picture">
                <img
                  src={
                    "https://www.leisureopportunities.co.uk/images/995586_746594.jpg"
                  }
                  alt="pic"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="list_section">
        <div className="create_list">
        <VscAdd className="create_list-icon" />
        </div>
        <div className="list_card">
          <h2 className="list__card-title">Todo</h2>
          <ul className="list__card-group">
            <li classname="card-list" onClick={(e)=> console.log(e.target)}><div className="list__card-item">Add social networks... </div></li>
            <li classname="card-list"><div className="list__card-item">Add social networks... </div></li>
            <li classname="card-list"><div className="list__card-item">Add social networks... </div></li>
            <li classname="card-list"><div className="list__card-item">Add social networks... </div></li>
            <li classname="card-list"><div className="list__card-item">Add social networks... </div></li>
          </ul>
          
          
          <div className="action-buttons">
          <VscAdd className="action-icon" />
            <a href="add-card" className="addCardLink">Add new card</a>
          </div>
        </div>
        <div className="list_card">
          <h2 className="list__card-title">Todo</h2>
          <ul className="list__card-group">
            <li classname="card-list"><div className="list__card-item">Add social networks... </div></li>
            <li classname="card-list"><div className="list__card-item">Add social networks... </div></li>
            <li classname="card-list"><div className="list__card-item">Add social networks... </div></li>
          </ul>
          <div className="action-buttons">
          <VscAdd className="action-icon" />
            <a href="add-card" className="addCardLink">Add new card</a>
          </div>
        </div>
        <div className="list_card">
          <h2 className="list__card-title">Todo</h2>
          <ul className="list__card-group">
            <li classname="card-list"><div className="list__card-item">Add social networks... </div></li>
            <li classname="card-list"><div className="list__card-item">Add social networks... </div></li>
            <li classname="card-list"><div className="list__card-item">Add social networks... </div></li>
          </ul>
          <div className="action-buttons">
          <VscAdd className="action-icon" />
            <a href="add-card" className="addCardLink">Add new card</a>
          </div>
        </div>
      </section>
      {/* <CardModal /> */}
      <CreateListModal />
    </>
  );
}
export default ShowBoard;
