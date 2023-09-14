import ResturantCard from "./ResturantCard";
import resList from "../utility/mock";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        {resList.map((resturant) => (
          <ResturantCard key={resturant.data.id} restroData={resturant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
