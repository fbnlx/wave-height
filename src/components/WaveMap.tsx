import { MapContainer, Marker, TileLayer } from "react-leaflet";
import Location from "./Location";
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
      className="wavemap-container"
      center={[59.9096, 10.7474]}
      zoom={13}
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
      <Location onClick={onClick} />
    </MapContainer>
  );
}
