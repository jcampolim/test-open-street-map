import { Polyline } from "react-leaflet";
import { Caminhos } from "./mapa";

export default function Edges() {
    const positions: { positions: [number, number][], name: string }[] = Caminhos;

    const edges = positions.map((item, index) => {
        return (
            <Polyline 
                key={`${index}`}
                color="red"
                weight={7}
                positions={item.positions} 
            />
        );
    });

    return <>{ edges }</>;
}