import { Link } from "react-router-dom";
import ResturantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

import { useEffect, useState } from "react";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    // console.log(
    //   response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );

    setListOfRestaurant(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  // console.log(listOfRestaurant);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're Offline !!! Please check your internet connection.
      </h1>
    );

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="ml-20">
      <div className="flex ml-20">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // console.log(searchText);
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filterdList = listOfRestaurant.filter(
                (res) => res?.info?.avgRating >= 4.3
              );
              // console.log(filterdList);
              setFilteredRestaurant(filterdList);
            }}
          >
            Top Rated Resturant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap px-4">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info?.id}
            to={"/restaurant/" + restaurant.info?.id}
          >
            <ResturantCard restroData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
