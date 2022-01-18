import EventsMapCSS from './eventsMapContainer.module.scss';
//leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
//hooks
import { useAppSelector } from '../../../../hooks';

const customMarker = L.icon({
    iconUrl: 'https://www.solojuve.com/media/com_easysocial/photos/81/136/b17729fd09cab9b3361cbb0c87917218_original.png',
    iconSize: [35, 46],
    iconAnchor: [17, 46]
});

export const EventsMapContainer = () => {

    const allUserEvents = useAppSelector(state => state.allUserEvents);
    const eventType = useAppSelector(state => state.selectEventTypeEventFinderReducer);

    const renderMarkers = () => {

        return (
            allUserEvents.data.map(val => {
                if (val.status === 'ACTIVE') {
                    if (val.availabilityType === eventType) {
                        const coordinates = val.address.coordinates.split(" ").map(val => parseFloat(val));
                        const lat = coordinates.length === 2 ? coordinates[0] : 1;
                        const lng = coordinates.length === 2 ? coordinates[1] : 1;
                        return (
                            <Marker position={[lng, lat]} icon={customMarker}>
                                <Popup>
                                    {val.name}
                                </Popup>
                            </Marker>
                        )
                    }
                }
            })
        )
    }

    const mapRender = () => {
        if (allUserEvents.fetchStatus === "FETCH_SUCCESS") {
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
                    {renderMarkers()}
                </MapContainer>
            )
        } else if (allUserEvents.fetchStatus === "BEFORE_FETCH") {
            return <></>
        } else if (allUserEvents.fetchStatus === "FETCH_ERROR") {
            return <h2>Something went wrong :c</h2>
        }
    }

    return (
        <>
            {mapRender()}
        </>
    )
}