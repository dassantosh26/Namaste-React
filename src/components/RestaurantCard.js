import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { restroData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, sla, costForTwo } =
    restroData?.info;

  return (
    <div
      className="m-4 p-4 w-[250px]  rounded-lg bg-gray-200 hover:bg-gray-400"
    
    >
      <img
        className="rounded-lg "
        src={CDN_URL + cloudinaryImageId}
        alt="car image"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{avgRating} Stars</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{sla.slaString} </h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export default ResturantCard;
