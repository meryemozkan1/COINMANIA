import React, { useEffect, useState } from "react";
import MainPageView from "../view/MainPageView";
import axios from "axios";

const MainPageController = () => {
  const [coins, setCoins] = useState([]);
  const [populer, setPopuler] = useState(null);

  useEffect(() => {
    axios.get("assets?limit=15").then((res) => {});
  }, []);
  console.log(coins);
  return <MainPageView />;
};

export default MainPageController;
