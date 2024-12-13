import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ISSTracker() {
  const {
    data: coords,
    isLoading,
    error,
    mutate,
  } = useSWR(URL, fetcher, { refreshInterval: 5000 });


  if (isLoading || !coords) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong...</p>;
  }

  const getISSCoords = () => {
    mutate();
  };

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}