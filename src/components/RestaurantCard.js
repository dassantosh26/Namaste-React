import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { restroData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, sla, costForTwo } =
    restroData?.info;

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
      <h4>{sla.slaString} </h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export default ResturantCard;