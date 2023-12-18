import ResturantCard from "./RestaurantCard";

import { useEffect, useState } from "react";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    // console.log(
    //   response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );

    setListOfRestaurant(
      response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = listOfRestaurant.filter(
              (res) => res?.info?.avgRating >= 4.3
            );
            setListOfRestaurant(filterdList);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="restro-container">
        {listOfRestaurant.map((restaurant) => (
          <ResturantCard key={restaurant?.info?.id} restroData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
