import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import Buildings from "./buildings/buildings";
import { useState } from "react";
import Restrooms from "./buildings/restrooms";
import Restaurants from "./buildings/restaurants";
import Edges from "./edges/edges";
import Transports from "./buildings/transport";

export default function Map() {
    const [ showRestroom, setShowRestroom ] = useState(true);
    const [ showRestaurant, setShowRestaurant ] = useState(true);

    return (
        <MapContainer center={[-23.547271, -46.651813]} zoom={18} scrollWheelZoom={true} attributionControl={false}>
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                maxZoom={20}
                minZoom={17.5}
            />
            <Buildings />
            <Transports />
            {
                showRestroom && <Restrooms />
            }
            {
                showRestaurant && <Restaurants />
            }
        </MapContainer>
    );
}