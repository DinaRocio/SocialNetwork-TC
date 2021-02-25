import React from "react";
import Header from "../components/header";

function ShowBoard() {
  console.log("llegooooo");

  return (
    <>
      <Header />
      <section className="colaborator_section">
        <h2 className="boards_section__titles">Todo for today</h2>
        <div className="colaborator__reel">
          <ul className="colaborator_list">
          <div class="create_colaborator">
            <i class="icon fas fa-plus"></i>
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
          <i className="icon fas fa-plus"></i>
        </div>
        <div className="list_card">
          <h2 className="list__card-title">Todo</h2>
          <div className="list__card-item">Add social networks... </div>
          <div className="list__card-item">Add social networks... </div>
          <div className="list__card-item">Add social networks... </div>
          <div className="action-buttons">
            <i class="icon fas fa-plus"></i>
            <a href="add-card" className="addCard">Add new card</a>
          </div>
        </div>
      </section>
    </>
  );
}
export default ShowBoard;
