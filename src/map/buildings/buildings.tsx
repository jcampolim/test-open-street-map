import { Polygon, SVGOverlay } from "react-leaflet";
import { Mapa } from "./mapa";
import Colors from "../categories/mackenzie"

export default function Buildings() {
    const bounds: { bounds: [number, number][], name: string }[] = Mapa;
    const colors = Colors;

    const buildings = bounds.map((item, index) => {
        return (
            <SVGOverlay bounds={item.bounds} >
                <Polygon 
                    key={`${index}`}
                    color={colors.find(c => c.name === item.name)?.color}
                    fillOpacity={0.8}
                    positions={item.bounds} 
                    
                />
                <text x="50%" y="60%" stroke="white">
                    {item.name}
                </text>
            </SVGOverlay>
        );
    });

    return <>{ buildings }</>;
}