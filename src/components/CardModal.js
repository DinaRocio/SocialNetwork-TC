import React from "react";
import { VscChromeClose } from "react-icons/vsc";

function CardModal() {
  return (
    <div class="dark_container">
      <div className="modal_container">
        <VscChromeClose className="close" />
        <form className="card-form">
          <div className="card-input">
            <input
              name="title"
              type="text"
              value="Add social networks..."
              className="title-input"
            />
            <div className="description-input">
              <label className="card__form-label">Description</label>
              <input
                className="description-input_input"
                name="title"
                type="text"
                placeholder="Type description here..."
              />
            </div>
          </div>

          <ul className="tags_group">
            <li className="tags_item">
              <div className="tag">Home</div>
            </li>
            <li className="tags_item">
              <div className="tag">Hacer</div>
            </li>
            <li className="tags_item">
              <div className="tag">Now</div>
            </li>
          </ul>

          <h2 className="card__form-label">Comments</h2>
          <ul className="comments_group">
            <li className="comments_item">
              <div className="colaborator_picture">
                <img
                  src={
                    "https://www.leisureopportunities.co.uk/images/995586_746594.jpg"
                  }
                  alt="pic"
                />
              </div>
              <div className="comment">
                Lorem Ipsum is simply dummy text of the
              </div>
            </li>
            <li className="comments_item">
              <div className="colaborator_picture">
                <img
                  src={
                    "https://www.leisureopportunities.co.uk/images/995586_746594.jpg"
                  }
                  alt="pic"
                />
              </div>
              <div className="comment">
                Lorem Ipsum is simply dummy text of the
              </div>
            </li>
            <li className="comments_item">
              <div className="colaborator_picture">
                <img
                  src={
                    "https://www.leisureopportunities.co.uk/images/995586_746594.jpg"
                  }
                  alt="pic"
                />
              </div>
              <div className="comment">
                Lorem Ipsum is simply dummy text of the
              </div>
            </li>
          </ul>

          <input
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
