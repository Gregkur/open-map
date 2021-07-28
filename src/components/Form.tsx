const Form = ({
  handleSubmit,
  handleChange,
  min_lon,
  min_lat,
  max_lon,
  max_lat,
}: any) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        required
        placeholder="min_lon"
        name="min_lon"
        value={min_lon}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="number"
        required
        placeholder="min_lat"
        name="min_lat"
        value={min_lat}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="number"
        required
        placeholder="max_lon"
        name="max_lon"
        value={max_lon}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="number"
        required
        placeholder="max_lat"
        name="max_lat"
        value={max_lat}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit" value="Submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default Form;
