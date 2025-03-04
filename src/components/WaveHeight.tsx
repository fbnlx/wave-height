interface Props {
  hmax: number;
  coordinates: { lat: number; lng: number };
}

export default function WaveHeight({ hmax, coordinates }: Props) {
  return (
    <div>
      <h1>
        Maximum wave height at coordinates ({coordinates.lng.toFixed(1)};
        {coordinates.lat.toFixed(1)})
      </h1>
      <h3>{hmax}</h3>
    </div>
  );
}
