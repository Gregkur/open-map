import axios from "axios";
import {stripData} from './stripData'
const API = "https://www.openstreetmap.org/api/0.6/map/?bbox=";

export const apiCall = async (
  min_lon: number,
  min_lat: number,
  max_lon: number,
  max_lat: number
) => {
  var osmtogeojson = require("osmtogeojson");
  try {
    const res = await axios.get(
      `${API}${min_lon},${min_lat},${max_lon},${max_lat}`
    );
    const geoJson = osmtogeojson(res.data);
    const features = stripData(geoJson.features);
    return features;
  } catch (err) {
    console.log(err);
  }
};
