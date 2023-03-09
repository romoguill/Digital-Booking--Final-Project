import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

function CustomMarker({ latitud, longitud, titulo }) {
  const map = useMap();
  const ubicacion = [longitud, latitud];

  map.setView(ubicacion, map.getZoom());

  return (
    <Marker position={ubicacion}>
      <Popup>{titulo}</Popup>
    </Marker>
  );
}

function Map({ producto, imagenes }) {
  const [latitud, setLatitud] = useState(0);
  const [longitud, setLongitud] = useState(0);
  const initalSettings = {
    center: [latitud, longitud],
    zoom: 15,
  };

  useEffect(() => {
    if (producto.id) {
      setLatitud(producto.longitud);
      setLongitud(producto.latitud);
    }
  });

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
      <CustomMarker latitud={latitud} longitud={longitud} titulo={producto.titulo} />
    </MapContainer>
  );
}

export default Map;
