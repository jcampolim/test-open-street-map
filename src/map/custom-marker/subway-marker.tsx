import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Marker } from "react-leaflet";

interface CustomMarkerProps {
  position: L.LatLngExpression;
  children: React.ReactNode;
}

const SubwayMarker: React.FC<CustomMarkerProps> = ({ position, children }) => {
    const customIcon = L.divIcon({
        html: `
            <svg 
                height="30px" 
                width="30px" 
                version="1.1" 
                id="_x32_" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="-51.2 -51.2 614.40 614.40"
                xml:space="preserve" 
                fill="#000000"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0">
                    <rect x="-51.2" y="-51.2" width="614.40" height="614.40" rx="36.864" fill="#FDC102" strokewidth="0"></rect>
                </g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                    <style type="text/css"> .st0{fill:#000000;} </style>    
                    <g> 
                        <path class="st0" d="M411.61,512h57.07l-95.817-114.102c37.022-7.162,65.006-39.719,65.006-78.826V80.335 C437.869,28.535,387.563,0,255.437,0C123.302,0,73.003,28.535,73.003,80.335v238.738c0,39.451,28.49,72.207,66.01,78.972L43.32,512 h57.07l64.279-76.574H347.3L411.61,512z M357.535,337.833c-15.336,0-27.776-12.44-27.776-27.777s12.44-27.776,27.776-27.776 c15.344,0,27.777,12.44,27.777,27.776S372.879,337.833,357.535,337.833z M182.617,35.368c0-2.13,1.716-3.83,3.83-3.83h137.98 c2.114,0,3.83,1.7,3.83,3.83V59.23c0,2.122-1.716,3.83-3.83,3.83h-137.98c-2.115,0-3.83-1.708-3.83-3.83V35.368z M112.799,207.346 V106.465c0-9.874,7.998-17.872,17.88-17.872h249.523c9.867,0,17.872,7.997,17.872,17.872v100.881 c0,9.874-8.005,17.878-17.872,17.878H130.679C120.797,225.224,112.799,217.219,112.799,207.346z M125.561,310.056 c0-15.336,12.433-27.776,27.77-27.776c15.343,0,27.776,12.44,27.776,27.776s-12.433,27.777-27.776,27.777 C137.995,337.833,125.561,325.392,125.561,310.056z"></path> 
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

export default SubwayMarker;