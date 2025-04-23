import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Marker } from "react-leaflet";

interface CustomMarkerProps {
  position: L.LatLngExpression;
  children: React.ReactNode;
}

const BathroomMarker: React.FC<CustomMarkerProps> = ({ position, children }) => {
    const customIcon = L.divIcon({
        html: `
            <svg 
                fill="#000000" 
                height="30px" 
                width="30px" 
                version="1.1" 
                id="Layer_1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="-51.2 -51.2 614.40 614.40" 
                xml:space="preserve" 
                stroke="#000000"
                stroke-width="0.00512" 
                transform="rotate(0)"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0">
                    <rect 
                        x="-51.2" 
                        y="-51.2" 
                        width="614.40" 
                        height="614.40" 
                        rx="67.584" 
                        fill="#fa7fbc" 
                        strokewidth="0"
                    ></rect>
                </g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.024">
                </g>
                <g id="SVGRepo_iconCarrier"> 
                    <g>  
                        <g> 
                            <path d="M256,0c-9.217,0-16.696,7.473-16.696,16.696v478.609c0,9.223,7.479,16.696,16.696,16.696 c9.217,0,16.696-7.473,16.696-16.696V16.696C272.696,7.473,265.217,0,256,0z"></path> 
                        </g> 
                    </g> 
                    <g> 
                        <g> 
                            <path d="M105.739,44.522c-36.826,0-66.783,29.956-66.783,66.783c0,36.826,29.956,66.783,66.783,66.783 s66.783-29.956,66.783-66.783C172.522,74.478,142.565,44.522,105.739,44.522z"></path> 
                        </g> 
                    </g> 
                    <g> 
                        <g> 
                            <path d="M406.261,44.522c-36.826,0-66.783,29.956-66.783,66.783c0,36.826,29.956,66.783,66.783,66.783 s66.783-29.956,66.783-66.783C473.043,74.478,443.087,44.522,406.261,44.522z"></path> 
                        </g> 
                    </g> 
                    <g> 
                        <g> 
                            <path d="M202.935,218.664c-3.109-4.501-8.239-7.186-13.717-7.186H22.261c-5.478,0-10.608,2.685-13.717,7.185 c-3.12,4.5-3.837,10.244-1.913,15.374l49.022,130.729v63.755c0,27.619,22.468,50.087,50.087,50.087s50.087-22.468,50.087-50.087 v-63.755l49.022-130.728C206.772,228.909,206.054,223.163,202.935,218.664z"></path> 
                        </g> 
                    </g> 
                    <g> 
                        <g> 
                            <path d="M505.37,355.875l-50.087-133.565c-2.445-6.516-8.674-10.831-15.63-10.831H372.87c-6.957,0-13.185,4.315-15.63,10.831 l-50.087,133.565c-1.924,5.13-1.207,10.876,1.913,15.374c3.109,4.501,8.239,7.186,13.717,7.186h33.391v50.087 c0,27.619,22.468,50.087,50.087,50.087s50.087-22.468,50.087-50.087v-50.087h33.391c5.478,0,10.608-2.685,13.717-7.185 C506.576,366.75,507.293,361.006,505.37,355.875z"></path> 
                        </g> 
                    </g> 
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

export default BathroomMarker;