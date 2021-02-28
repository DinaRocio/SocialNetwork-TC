import React from "react";
import BoardItem from "../components/BoardItem";
import Header from "../components/header";
import "../stylesheets/Main.css";
import "../stylesheets/Colaborator.css";
import "../stylesheets/List.css";
import { useState } from "react";
import LogoutModal from "../components/LogoutModal";

function Main({ goto, datalist, actualRoute }) {
  const [showLogout, setShowLogout] = useState(false);
  const [actualId, setActualId] = useState(0);

  return (
    <>
      {showLogout && <LogoutModal onCancel={() => setShowLogout(false)} />}
      <Header actualRoute={actualRoute} onClick={() => setShowLogout(true)} />

      <main className="main_section">
        <BoardItem
          onClick={() => setShowLogout(true)}
          goto={goto}
          datalist={datalist}
          selectPage={(id) => setActualId(id)}
        />
      </main>
    </>
  );
}

export default Main;
