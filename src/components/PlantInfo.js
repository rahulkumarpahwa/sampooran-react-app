import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, API_URL, IMG_URL } from "../../utils/constants";
import Shimmer from "./Shimmer";

const PlantInfo = () => {
  let name = useParams().name;
  // console.log(name);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${API_URL}${API_KEY}?name=${name}`);
    const json = await data.json();
    console.log(json.data[0]);
    setData(json.data[0]);
  };

  return data === null ? (
    <Shimmer />
  ) : (
    <div className="plant-info">
      <img className="plant-info-img" src={`${IMG_URL}${data.cloudinaryId}`} />
      <div className="plant-info-container">
        <h1>{data.name}</h1> <h2>{data.type}</h2>
        <p>{data.about}</p>
      </div>
    </div>
  );
};
export default PlantInfo;
