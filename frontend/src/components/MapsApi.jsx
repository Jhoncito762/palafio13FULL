import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '90%',
  left: '5%',
  top: '40px',
  height: '400px',
  display: 'flexbox'
};

const center = {
  lat: 2.9420157417112534,
  lng: -75.29844381962066,
};

const markerPosition = {
  lat: 2.9420157417112534, // Latitud del marcador
  lng: -75.29844381962066, // Longitud del marcador
};

const MapsApi = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA3z2rHt_0FJNvwmE1ROn31fjwhVxLXYNw" // Asegúrate de reemplazar con tu propia clave de API de Google Maps
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={6}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker position={markerPosition} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MapsApi;
