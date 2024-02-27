import { Link } from "react-router-dom";
import { IMG_URL } from "../../utils/constants";

const PlantCard = (props) => {
  // console.log(props);
  const { plantData } = props;
  // console.log(plantData);

  return (
    <div className="plant-card">
      <img
        className="plant-img"
        src={`${IMG_URL}${plantData.cloudinaryId}`}
      />
      <div className="plant-card-info">
        <h3>{plantData.name} </h3>
        <p>
          {" "}
          {plantData.type}
          <Link to={`/plants/${plantData.name}`}>Know more</Link>
        </p>{" "}
      </div>
    </div>
  );
};

export default PlantCard;
