import React from "react";
import { VscChromeClose } from "react-icons/vsc";

function CreateCardModal({onCancel}) {
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
              placeholder="Write down a card name"
              className="title-input"
            />
            <div className="description-input">
              <label htmlFor="description"  className="card__form-label">Description</label>
              <input
                className="description-input_input"
                name="description" 
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

          <button type="submit" className="submit_card">Create Card</button>
        </form>
      </div>
    </div>
  );
}
export default CreateCardModal;
