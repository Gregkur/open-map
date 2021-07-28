import { useState } from "react";
import { apiCall } from "../utils/apiCall";

import Features from "./Features";

const Landing = () => {
  const [formData, setFormData] = useState({
    min_lon: 13.40515,
    min_lat: 52.5077,
    max_lon: 13.40563,
    max_lat: 52.50796,
  });
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const { min_lon, min_lat, max_lon, max_lat } = formData;

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = await apiCall(min_lon, min_lat, max_lon, max_lat);
    setFeatures(data);
    setLoading(false);
    setShowForm(true);
  };

  return (
    <div className="container-main">
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
        <button type="submit" value="Submit" className="btn">
          Submit
        </button>
      </form>
      {showForm && <Features features={features} loading={loading} />}
    </div>
  );
};
export default Landing;
