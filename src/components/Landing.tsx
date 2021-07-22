import { useState } from "react";
import apiCall from "../hooks/useApiCall";

const Landing = () => {
  const [formData, setFormData] = useState({
    min_lon: "",
    min_lat: "",
    max_lon: "",
    max_lat: "",
  });
  const { min_lon, min_lat, max_lon, max_lat } = formData;

  const API = "https://www.openstreetmap.org/api/0.6/map/?bbox=";

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    apiCall(min_lon, min_lat, max_lon, max_lat);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="min_lon"
          name="min_lon"
          value={min_lon}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          placeholder="min_lat"
          name="min_lat"
          value={min_lat}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          placeholder="max_lon"
          name="max_lon"
          value={max_lon}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          placeholder="max_lat"
          name="max_lat"
          value={max_lat}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </>
  );
};
export default Landing;
// min_lon,min_lat,max_lon,max_lat.
