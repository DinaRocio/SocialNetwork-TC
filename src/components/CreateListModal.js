import React from "react";

function CreateListModal({ onCancel }) {
  return (
    <div
      className="dark_container"
    >
      <div className="transparent_container"
        onClick={(e) => {
          e.preventDefault();
          onCancel();
        }}
      ></div>
      <div className="list_modal_container">
        <form className="list-form">
          <input
            type="text"
            name="list_name"
            placeholder="Type name of list..."
            className="list-input"
          />
          <button type="submit" className="submit_list">Create List</button>
        </form>
      </div>
    </div>
  );
}
export default CreateListModal;
