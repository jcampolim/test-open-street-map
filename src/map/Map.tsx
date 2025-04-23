import { MapContainer, Popup, TileLayer } from "react-leaflet";
import Buildings from "./buildings/buildings";
import BathroomMarker from "./custom-marker/bathroom-marker";

export default function Map() {
    return (
        <MapContainer center={[-23.547271, -46.651813]} zoom={18} scrollWheelZoom={true} attributionControl={false}>
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                maxZoom={20}
                minZoom={15}
            />
            <Buildings />
            <BathroomMarker position={[-23.547271, -46.651813]}>
                <Popup>This is a custom marker popup</Popup>
            </BathroomMarker>
        </MapContainer>
    );
}