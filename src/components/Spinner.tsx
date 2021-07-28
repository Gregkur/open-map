import spinner from "./spinner.gif";

const Spinner = () => (
  <>
    <img
      src={spinner}
      style={{
        width: "200px",
        margin: "auto",
        display: "block",
        boxShadow: "unset",
      }}
      alt="Loading..."
    />
  </>
);

export default Spinner;