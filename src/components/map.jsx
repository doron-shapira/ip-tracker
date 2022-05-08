import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Map({ coords }) {
    return (
        <MapContainer key={coords.lat} id="map" center={[coords.lat, coords.long]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[coords.lat, coords.long]}>
                <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
            </Marker>
        </MapContainer>
    );
}