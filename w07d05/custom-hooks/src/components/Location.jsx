import useLocationData from "../hooks/useLocationData";

const Location = () => {
  const coords = useLocationData();

  return (
    <div>
      <h2>You are located at</h2>
      <h2>Lat: {coords.lat}</h2>
      <h2>Lon: {coords.lon}</h2>
    </div>
  );
};

export default Location;
