import { SyntheticEvent, useState } from "react";
import { apiCall } from "../utils/apiCall";

import Features from "./Features";
import Form from "./Form";

import "../styles/style.css";

const Landing = () => {
  const [formData, setFormData] = useState({
    min_lon: "",
    min_lat: "",
    max_lon: "",
    max_lat: "",
  });
  const [features, setFeatures] = useState({});
  const [loading, setLoading] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  const { min_lon, min_lat, max_lon, max_lat } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = await apiCall(min_lon, min_lat, max_lon, max_lat);
    setFeatures(data);
    setLoading(false);
    setShowFeatures(true);
  };

  return (
    <div className="container">
      <Form
        min_lon={min_lon}
        min_lat={min_lat}
        max_lon={max_lon}
        max_lat={max_lat}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {showFeatures && <Features features={features} loading={loading} />}
    </div>
  );
};
export default Landing;
