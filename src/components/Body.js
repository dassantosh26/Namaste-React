import ResturantCard from "./ResturantCard";
import resList from "../utility/mock";
import { useState } from "react";
const Body = () => {
  const [listOfResturant, setListOfResturant] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = resList.filter((res) => res.data.avgRating > 4);
            setListOfResturant(filterdList);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="restro-container">
        {listOfResturant.map((resturant) => (
          <ResturantCard key={resturant.data.id} restroData={resturant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
