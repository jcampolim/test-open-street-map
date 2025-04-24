import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Marker } from "react-leaflet";

interface CustomMarkerProps {
  position: L.LatLngExpression;
  children: React.ReactNode;
}

const RestaurantMarker: React.FC<CustomMarkerProps> = ({ position, children }) => {
    const customIcon = L.divIcon({
        html: `
            <svg 
                fill="#000000" 
                height="30px" 
                width="30px" 
                viewBox="-3.2 -3.2 38.40 38.40" 
                id="icon" 
                xmlns="http://www.w3.org/2000/svg" 
                stroke="#000000" 
                stroke-width="0.00032"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)">
                    <rect 
                        x="-3.2" 
                        y="-3.2" 
                        width="38.40" 
                        height="38.40" 
                        rx="4.992" 
                        fill="#6694ff" 
                        strokewidth="0"
                    >
                    </rect>
                </g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.32">
                </g>
                <g id="SVGRepo_iconCarrier">
                    <defs>
                        <style>.cls-1{fill:none;}</style>
                    </defs>
                    <title>
                        coffee
                    </title>
                    <rect x="2" y="28" width="28" height="2"></rect>
                    <path d="M24.5,11H8a2.002,2.002,0,0,0-2,2v8a5.0059,5.0059,0,0,0,5,5h8a5.0059,5.0059,0,0,0,5-5V20h.5a4.5,4.5,0,0,0,0-9ZM22,21a3.0033,3.0033,0,0,1-3,3H11a3.0033,3.0033,0,0,1-3-3V13H22Zm2.5-3H24V13h.5a2.5,2.5,0,0,1,0,5Z" transform="translate(0 0)"></path>
                    <path d="M19,9H17V8.854a1.9883,1.9883,0,0,0-1.1055-1.7886L13.2109,5.7236A3.9788,3.9788,0,0,1,11,2.146V1h2V2.146a1.9892,1.9892,0,0,0,1.1055,1.7886l2.6836,1.3418A3.9792,3.9792,0,0,1,19,8.854Z" transform="translate(0 0)"></path>
                    <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" class="cls-1" width="32" height="32"></rect>
                </g>
            </svg>
        `,
        className: 'custom-svg-icon',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

    return (
        <Marker position={position} icon={customIcon}>
            {children}
        </Marker>
    );
};

export default RestaurantMarker;