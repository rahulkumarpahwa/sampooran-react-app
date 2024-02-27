import { API_KEY, API_URL } from "../../utils/constants";
import data from "../../utils/data";
import PlantCard from "./PlantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [plantData, setPlantData] = useState(data);
  const [searchText, setSearchText] = useState("");
  const [filteredPlant, setFilteredPlant] = useState(data);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${API_URL}${API_KEY}`);
    const json = await data.json();
    console.log(json);
    setPlantData(json.data);
    setFilteredPlant(json.data);
  };

  return (
    <div className="body">
      <div className="search-bar">
        <input
          type="text"
          className="search"
          placeholder="Search Any Plant🪴"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            const filteredPlant = plantData.filter((plant) =>
              plant.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredPlant(filteredPlant);
            setSearchText("");
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="plant-container">
        {/* <PlantCard /> */}
        {filteredPlant.map((plant) => (
          <PlantCard key={plant.id} plantData={plant} />
        ))}

        {/* <PlantCard  plantData={data[0]} /> */}
      </div>
    </div>
  );
};

export default Body;
