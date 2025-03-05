import { MapContainer, Marker, TileLayer } from "react-leaflet";
import MapEvent from "./MapEvent";
import "./WaveMap.css";
import "leaflet/dist/leaflet.css";
import leafletIcon from "../util/leafletIcon";

interface Props {
  onClick: (latlng: { lat: number; lng: number }) => void;
  position?: { lat: number; lng: number };
}

export default function WaveMap({ onClick, position }: Props) {
  return (
    <MapContainer
      className="wavemap--container"
      center={[5, 5]}
      zoom={4}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {position && (
        <Marker
          position={[position.lat, position.lng]}
          icon={leafletIcon}
        ></Marker>
      )}
      <MapEvent onClick={onClick} />
    </MapContainer>
  );
}
