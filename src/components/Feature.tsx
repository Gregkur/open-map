import { v4 as uuidv4 } from "uuid";

const Feature = ({ feature }: any) => {
  const mappedFeatures = feature.map((f: string[]) => (
    <thead key={uuidv4()}>
      <tr key={uuidv4()} className="table-cell">
        <th>{f[0]}: </th>
        <td>{f[1]}</td>
      </tr>
    </thead>
  ));

  return <table key={uuidv4()}>{mappedFeatures}</table>;
};
export default Feature;
