import React from "react";

import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";

import Header from "../Pages/Header/Header";
import Sidebar from "../Pages/Sidebar/Sidebar";
import ProfilPage from "../Pages/ProfilPage/ProfilPage";

/**
 * Component for showing App with Routes
 *
 * @component
 */
function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Sidebar />
        <div className="app__content">
          <Routes>
            <Route path="profil">
              <Route path=":id" element={<ProfilPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/profil/12" replace />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
