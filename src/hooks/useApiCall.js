import axios from "axios";
// import osmtogeojson from "osmtogeojson";
const API = "https://www.openstreetmap.org/api/0.6/map/?bbox=";
const apiCall = async (min_lon, min_lat, max_lon, max_lat) => {
  var osmtogeojson = require("osmtogeojson");

  try {
    const res = await axios.get(
      `${API}${min_lon},${min_lat},${max_lon},${max_lat}`
    )
    console.log('res',res);
    const geoJson = osmtogeojson(res.data);
    console.log('geo', geoJson);
  } catch (err) {
    console.log(err);
  }
};

export default apiCall;
