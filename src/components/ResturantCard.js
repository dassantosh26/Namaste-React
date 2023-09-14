import { CDN_URL } from "../utility/constants";

const ResturantCard = (props) => {
  const { restroData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, deliveryTime } =
    restroData?.data;

  return (
    <div className="restro-card" style={{ backgroundColor: " #f0f0f0" }}>
      <img
        className="card-img"
        src={CDN_URL + cloudinaryImageId}
        alt="car image"
      />
      <h3>{name}</h3>
      <h4>{avgRating} Stars</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{deliveryTime} Min</h4>
    </div>
  );
};
export default ResturantCard;
