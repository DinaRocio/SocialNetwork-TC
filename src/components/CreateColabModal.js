import React from "react";

function CreateColabModal({ onCancel }) {
  return (
    <div className="dark_container">
      <div
        className="outer_space"
        // falta señalizar que solo cuando hace click fuera del div se cierre, el input pierde funcionalidad
        onClick={(e) => {
          e.preventDefault();
          onCancel();
        }}
      >
        <div className="list_modal_container">
          <form className="list-form">
            <input
              type="text"
              placeholder="yefrioscar9814@gmail.com"
              className="list-input"
            />
            <button className="submit_list">Send Invitation</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CreateColabModal;
