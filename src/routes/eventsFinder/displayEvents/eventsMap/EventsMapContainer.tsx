import EventsMapCSS from './eventsMapContainer.module.scss';
//leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

export const EventsMapContainer = () => {

    return (
        <MapContainer
            center={[52.653160, 19.059940]}
            zoom={7}
            style={{ width: '50%', height: '100%' }}
            scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}