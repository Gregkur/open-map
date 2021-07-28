import axios from "axios";

import { stripData } from "./stripData";
import { API } from "./consts";

export const apiCall = async (
  min_lon: string,
  min_lat: string,
  max_lon: string,
  max_lat: string
) => {
  var osmtogeojson = require("osmtogeojson");
  try {
    // Api call to OSM
    const res = await axios.get(
      `${API}${min_lon},${min_lat},${max_lon},${max_lat}`
    );
    // Change OSM to JSON
    const geoJson = osmtogeojson(res.data);
    // Strip the JSON to only properties
    const features = stripData(geoJson.features);
    return features;
  } catch (err) {
    console.log(err);
    return [];
  }
};
