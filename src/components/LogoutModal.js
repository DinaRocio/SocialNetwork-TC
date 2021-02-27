import React from "react";
import { FiLogOut } from "react-icons/fi";

function LogoutModal({ onCancel }) {
  return (
    <div
      className="dark_container"
      onClick={(e) => {
        e.preventDefault();
        onCancel();
      }}
    >
      <div className="logout_modal_container">
        <FiLogOut className="logout-icon" />
        <p className="logout_title">Sign out</p>
      </div>
    </div>
  );
}
export default LogoutModal;
