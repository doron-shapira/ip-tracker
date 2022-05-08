import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import marker from '../assets/icon-location.svg';

const locationIcon = new L.icon({
    iconUrl: marker,
    iconSize: [36, 46],
    iconAnchor: [18, 46]
  });

export default function Map({ coords }) {
    return (
        <MapContainer key={coords.lat} id="map" center={[coords.lat, coords.long]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[coords.lat, coords.long]} icon={locationIcon} />
        </MapContainer>
    );
}