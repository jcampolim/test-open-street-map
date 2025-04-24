import { Popup } from "react-leaflet";
import { Banheiros } from "./mapa";
import RestroomMarker from "../custom-marker/restroom-marker";

export default function Restrooms() {
    const positions: { position: [number, number], name: string }[] = Banheiros;

    const restrooms = positions.map((item, index) => {
        return (
            <RestroomMarker key={`${index}`} position={ item.position }>
                <Popup>This is a custom marker popup</Popup>
            </RestroomMarker>
        );
    });

    return <>{ restrooms }</>;
}