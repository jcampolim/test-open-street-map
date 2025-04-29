import { Popup } from "react-leaflet";
import SubwayMarker from "../custom-marker/subway-marker";

export default function Transports() {
    const subway = () => {
        return (
            <SubwayMarker key="1" position={[-23.548698051113906, -46.652392971211356]}>
                <Popup>This is a custom marker popup</Popup>
            </SubwayMarker>
        );
    };

    return <>{ subway() }</>;
}