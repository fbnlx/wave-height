import React from "react";
import "./WaveHeight.css";

interface Props {
  hmax?: number;
  coordinates?: { lat: number; lng: number };
}

export default function WaveHeight({ hmax, coordinates }: Props) {
  if (!coordinates) {
    return (
      <h1 className="wave-height--container">
        Select a location to display maximum wave height
      </h1>
    );
  }

  return (
    <div className="wave-height--container">
      {hmax ? (
        <h1>
          Maximum wave height at coordinates ({coordinates.lng.toFixed(1)};
          {coordinates.lat.toFixed(1)}):
        </h1>
      ) : (
        <h1>No wave height data for the selected location</h1>
      )}
      <h2>{hmax}</h2>
    </div>
  );
}
