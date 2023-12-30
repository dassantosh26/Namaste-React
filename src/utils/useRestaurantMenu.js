import React, { useEffect, useState } from "react";
import { Menu_Api } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Menu_Api + resId);
    const response = await data.json();
    setResInfo(response.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
