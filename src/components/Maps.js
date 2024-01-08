import React, { useState } from "react";
import {
  MapsComponent,
  LayersDirective,
  LayerDirective,
  Inject,
  Zoom,
  Marker,
  MapsTooltip,
} from "@syncfusion/ej2-react-maps";

const Map = (props) => {
  const [latitude, setLatitude] = useState(props.latitude || 0);
  const [longitude, setLongitude] = useState(props.longitude || 0);
  const mapArea = {
    latitude: latitude,
    longitude: longitude,
    zoom: 12,
  };
  return (
    <div className="maps">
      <MapsComponent
        centerPosition={mapArea}
        zoomSettings={{
          zoomFactor: 12,
        }}
      >
        <LayersDirective>
          <LayerDirective urlTemplate="https://tile.openstreetmap.org/level/tileX/tileY.png" />
        </LayersDirective>
      </MapsComponent>
    </div>
  );
};

export default Map;
