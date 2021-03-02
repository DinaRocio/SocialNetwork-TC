import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import generateKey from "./../utils/generator";

function CardModal({ onCancel, card}) {


  return (

    <div className="dark_container">
      <div className="modal_container">
        <VscChromeClose className="close" onClick={(e) => {
      e.preventDefault();
      onCancel();
    }}/>
        <form className="card-form">
          <div className="card-input">
            <input
              name="title"
              type="text"
              className="title-input"
              placeholder={card.title}
            />
            <div className="description-input">
              <label htmlFor="description"  className="card__form-label">Description</label>
              <textarea
                className="description-input_input"
                name="description" 
                placeholder="Type description here..."
              />
            </div>
          </div>
          
          <ul className="tags_group">
          {card.tag.map((tagItem) => {
            return (
              <li className="tags_item" key={generateKey()}>
              <div className="tag">{tagItem}</div>
            </li>
            )
          })}
          </ul>
          
          <h2 className="card__form-label">Comments</h2>
          <ul className="comments_group">
          {card.comments.map((comment) => {
            return ( 
              <li className="comments_item" key={generateKey()}>
              <div className="colaborator_picture">
                <img
                  src={
                    "https://www.leisureopportunities.co.uk/images/995586_746594.jpg"
                  }
                  alt="pic"
                />
              </div>
              <div className="comment">
                {comment.body}
              </div>
            </li>
            )
          })}
          </ul>

          <textarea
            className="comment-input_input"
            name="comment"
            type="text"
            placeholder="Type comment here..."
          />
        </form>
      </div>
    </div>
  );
}
export default CardModal;
