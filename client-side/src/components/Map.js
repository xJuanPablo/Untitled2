import { GoogleMap, MarkerF, InfoWindowF, useLoadScript } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_FOUNTAINS } from "../utils/queries";

export const Map = () => {
  const { loading, data } = useQuery(QUERY_FOUNTAINS);
  
  const markers = data?.fountains || [];

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || '',
  });

  const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();

  const center = useMemo(() => ({ lat: 30.274761622222364, lng: -97.74004407567682 }), []);

  // const markers = [
  //   { lat: 30.273112707102534, lng: -97.74304807414148, address: "Address1" },
  //   { lat: 30.274761622222364, lng: -97.74004407567682, address: "Address2" },
  //   { lat: 30.2673, lng: -97.7318, address: "Address3" },
  // ];

  const onMapLoad = (map) => {
    setMapRef(map);
    const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  const handleMarkerClick = (id, lat, lng, address) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, address });
    setIsOpen(true);
  };

  return (
    <div className="Map">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          onLoad={onMapLoad} 
          center={center}
          zoom={10}
          onClick ={()=>setIsOpen(false)}
        >
          {markers.map(({address, lat, lng }, i) => (
            <MarkerF 
            key={i}
            position={{ lat: lat, lng: lng }} 
            icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"} 
            onClick={() => {
              handleMarkerClick(i, lat, lng, address);
            }}>
              {isOpen && infoWindowData?.id === i && (
                <InfoWindowF
                  onCloseClick={() => {
                    setIsOpen(false);
                  }}>
                <h4>{infoWindowData.address}</h4>
              </InfoWindowF>
              )}
          </MarkerF>
          ))}
        </GoogleMap>
      )}
    </div>
  );
};