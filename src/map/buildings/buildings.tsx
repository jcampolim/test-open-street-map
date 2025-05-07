import { useState } from "react";
import { Polygon, SVGOverlay } from "react-leaflet";
import { Mapa } from "./mapa";
import Colors from "../categories/mackenzie";
import "../building-info/modal.css";
import Modal, { modalProps } from "../building-info/Modal";

export default function Buildings() {
    const bounds: { bounds: [number, number][], name: string }[] = Mapa;
    const colors = Colors;

    const [selectedBuilding, setSelectedBuilding] = useState<modalProps | null>(null);

    const buildings = bounds.map((item, index) => {
        return (
            <SVGOverlay key={index} bounds={item.bounds}>
                <Polygon 
                    color={colors.find(c => c.name === item.name)?.color}
                    fillOpacity={0.8}
                    positions={item.bounds}
                    eventHandlers={{
                        click: () =>
                            setSelectedBuilding({
                              id: item.name,
                              name: "Faculdade de Computação e Informática",
                              categories: "Salas de aula, laboratório",
                              pontoDeColeta: "Lixo eletrônico",
                              localizacao: ""
                            })
                    }}
                />
                <text x="50%" y="60%" stroke="white">
                    {item.name}
                </text>
            </SVGOverlay>
        );
    });

    return (
        <>
            {buildings}
            {selectedBuilding && (
                <Modal 
                    {...selectedBuilding}
                    onClose={() => setSelectedBuilding(null)}
                />
            )}
        </>
    );
}