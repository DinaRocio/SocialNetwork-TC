import React from "react";


function CreateListModal() {
  return (
    <div className="list_modal_container">
      <form className="list-form">
        <input type="text" placeholder="Type name of list..." class="list-input"/>
        <button class="submit_list">Create List</button>
      </form>
    </div>
  );
}
export default CreateListModal;
