import React from "react";


function CreateListModal({onCancel}) {
  return (
    <div class="dark_container" onClick={(e) => {
      e.preventDefault();
      onCancel();
    }}>
    <div className="list_modal_container">
      <form className="list-form">
        <input type="text" placeholder="Type name of list..." class="list-input"/>
        <button class="submit_list">Create List</button>
      </form>
    </div>
    </div>
  );
}
export default CreateListModal;
