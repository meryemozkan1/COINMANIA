import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./view/LoginPage";
import HeaderView from "./view/HeaderView";
import MainPageController from "./controller/MainPageController";
import axios from "axios";

axios.defaults.baseURL = "https://api.coincap.io/v2";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderView />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<MainPageController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
