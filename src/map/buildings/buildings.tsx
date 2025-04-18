import { Polygon } from "react-leaflet";
import mapa from "./mapa";

export default function Buildings() {
    const bounds: { bounds: [number, number][], color: string }[] = mapa;

    const buildings = bounds.map((item, index) => {
        return (
            <Polygon 
                key={`${index}`}
                color={item.color} 
                positions={item.bounds} 
            />
        );
    });

    return <>{ buildings }</>;
}