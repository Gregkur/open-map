import { v4 as uuidv4 } from "uuid";

import Spinner from "./Spinner";
import Feature from "./Feature";

const Features = ({ features, loading }: any) => {
  const mappedFeatures = features.map((feature: string[]) => (
    <Feature feature={feature} key={uuidv4()} />
  ));
  
  return loading ? (
    <Spinner />
  ) : (
    <div className="table-container">{mappedFeatures}</div>
  );
};
export default Features;
