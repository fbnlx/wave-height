import React from "react";
import "./App.css";
import WaveMap from "./components/WaveMap";
import data from "./data/wave_data.json";
import WaveHeight from "./components/WaveHeight";

type WaveData = Record<string, number>;

const waveData: WaveData = data as WaveData;

function App() {
  const [hmax, setHmax] = React.useState<number>();
  const [position, setPosition] = React.useState<{
    lat: number;
    lng: number;
  }>();

  function onClickLocation(latlng: { lat: number; lng: number }) {
    const latitude = (Math.round(latlng.lat * 2) / 2).toFixed(1);
    const longitude = (Math.round(latlng.lng * 2) / 2).toFixed(1);
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    console.log(waveData[`${longitude};${longitude}`]);
    setHmax(waveData[`${longitude};${longitude}`]);
    setPosition(latlng);
  }

  return (
    <div className="App">
      <div className="App__body">
        <WaveHeight
          hmax={waveData["0.0;0.0"]}
          coordinates={{ lat: 0.0, lng: 0.0 }}
        />
        {hmax && position && <WaveHeight hmax={hmax} coordinates={position} />}
        <WaveMap onClick={onClickLocation} position={position} />
      </div>
    </div>
  );
}

export default App;
