import { v4 as uuidv4 } from "uuid";

const Feature = ({ feature }: any) => {
  return (
    <table key={uuidv4()}>
      {feature.map((f: any) => (
        <thead key={uuidv4()}>
          <tr key={f.id} className="container-cell">
            <th>{f[0]}: </th>
            <td>{f[1]}</td>
          </tr>
        </thead>
      ))}
    </table>
  );
};
export default Feature;
