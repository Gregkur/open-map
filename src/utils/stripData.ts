export const stripData = (geoJson: any) => {
  // Stripping the parts of the response that are not needed
  const features = geoJson.map((f: any) => f.properties);
  // Mapping the features into  arrays key-value pairs
  const arrayOfFeatures = features.map((f: Object) => Object.entries(f));
  // Returns an array of key-value pairs of features
  return arrayOfFeatures;
};
