import { Popup } from "react-leaflet";
import { Restaurantes } from "./mapa";
import RestaurantMarker from "../custom-marker/restaurant-marker";

export default function Restaurants() {
    const positions: { position: [number, number], name: string }[] = Restaurantes;

    const restaurants = positions.map((item, index) => {
        return (
            <RestaurantMarker key={`${index}`} position={ item.position }>
                <Popup>This is a custom marker popup</Popup>
            </RestaurantMarker>
        );
    });

    return <>{ restaurants }</>;
}