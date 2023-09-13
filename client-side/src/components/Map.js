import { GoogleMap, MarkerF, InfoWindowF, useLoadScript } from "@react-google-maps/api";
import { useMemo, useState, useRef, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_FOUNTAINS } from "../utils/queries";

export const Map = () => {
  const mapRef = useRef(null)
  
  const google = window.google ? window.google : {};
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || '',
  });
  
  const [position, setPosition] = useState({
    lat: 30.27,
    lng: -97.74
  })
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();
  
  const { loading, data } = useQuery(QUERY_FOUNTAINS);
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      // console.log('lat', position.coords.latitude);
      // console.log('lon', position.coords.longitude);
      setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    })
  }, [])

  const markers = data?.fountains || [];
  console.log(markers);

  // const center = useMemo(() => ({ lat: 30.274761622222364, lng: -97.74004407567682 }), []);

  // const center = { lat: 30.274761622222364, lng: -97.74004407567682 };

  // const markers = [
  //   { lat: 30.273112707102534, lng: -97.74304807414148, address: "Address1" },
  //   { lat: 30.274761622222364, lng: -97.74004407567682, address: "Address2" },
  //   { lat: 30.2673, lng: -97.7318, address: "Address3" },
  // ];




  const onMapLoad = (map) => {
    mapRef.current = map;
    // const bounds = new window.google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => {
      const latt = parseFloat(lat)
      const lon = parseFloat(lng)
      // bounds?.extend({ latt, lon })
    });
    // map.fitBounds(bounds);
  };

  const handleMarkerClick = (id, lat, lng, address) => {
    mapRef.current?.panTo({ lat, lng });
    setInfoWindowData({ id, address });
    setIsOpen(true);
  };

  const handleCenter = () => {
    if (!mapRef.current) return
    const newPos = mapRef?.current.getCenter().toJSON();
    setPosition(newPos)
  };

  return (
    <div className="Map">
      {!isLoaded && markers.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          onLoad={onMapLoad}
          onDragEnd={handleCenter}
          center={position}
          zoom={13.5}
          onClick={() => setIsOpen(false)}
        >
          {markers.map((item, i) => (
            <MarkerF
              key={i}
              position={{ lat: parseFloat(item.lat), lng: parseFloat(item.lng) }}
              icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
              onClick={() => {
                handleMarkerClick(i, parseFloat(item.lat), parseFloat(item.lng), item.address);
              }}
            >
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