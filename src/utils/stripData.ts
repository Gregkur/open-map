export const stripData = (geoJson: any) => {
  const features = geoJson.map((feature: any) => feature.properties);
  const arrayOfFeatures = features.map((f: any) => Object.entries(f));
  return arrayOfFeatures;
};
