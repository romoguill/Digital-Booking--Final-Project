import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  const initalSettings = {
    center: [-34.5486686823985, -58.44360312868901],
    zoom: 15,
  };
  return (
    <MapContainer
      center={initalSettings.center}
      zoom={initalSettings.zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-34.5486686823985, -58.44360312868901]}>
        <Popup></Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
