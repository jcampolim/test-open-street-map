import React from "react";
import { MapContainer, Polygon, SVGOverlay, TileLayer } from "react-leaflet";

export default function Map() {
    const bounds: [number, number][] = [
        [-23.546419315018454, -46.65217216369708],
        [-23.54656131523093, -46.6523022508281],
        [-23.54627239689085, -46.65268781835532],
        [-23.546128552203292, -46.65256309564255],
    ];

    return (
        <MapContainer center={[-23.547271, -46.651813]} zoom={50} scrollWheelZoom={true} attributionControl={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <SVGOverlay attributes={{ stroke: 'red' }} bounds={bounds}>
                <text x="50%" y="50%" stroke="white">
                    text
                </text>
            </SVGOverlay>
            <Polygon color={'purple'} positions={bounds} />
        </MapContainer>
    );
}