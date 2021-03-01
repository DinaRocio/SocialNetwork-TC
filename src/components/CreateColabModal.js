import React from "react";

function CreateColabModal({ onCancel }) {
  return (
    <div className="dark_container">
       <div className="transparent_container"
        onClick={(e) => {
          e.preventDefault();
          onCancel();
        }}
      ></div>
        <div className="list_modal_container">
          <form className="list-form">
            <input
              name="colab_email" 
              type="text"
              placeholder="yefrioscar9814@gmail.com"
              className="list-input"
            />
            <button className="submit_list">Send Invitation</button>
          </form>
        </div>
     
    </div>
  );
}
export default CreateColabModal;
