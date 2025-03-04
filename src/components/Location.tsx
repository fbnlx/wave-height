import { useMapEvents } from "react-leaflet";

interface Props {
  onClick: (latlng: { lat: number; lng: number }) => void;
}

export default function Location(props: Props) {
  useMapEvents({
    click(e) {
      props.onClick(e.latlng);
    },
  });
  return <div />;
}
