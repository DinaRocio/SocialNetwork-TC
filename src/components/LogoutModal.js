import React from "react";
import { FiLogOut } from "react-icons/fi";

function LogoutModal() {
  return (
    <div className="dark_container">
    <div className="logout_modal_container">
      <FiLogOut className="logout-icon"/>
      <p className="logout_title">Sign out</p>
    </div>
    </div>
  );
}
export default LogoutModal;
