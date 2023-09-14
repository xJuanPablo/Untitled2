import { GoogleMap, MarkerF, InfoWindowF, useLoadScript } from "@react-google-maps/api";
import { useMemo, useState, useRef, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_FOUNTAINS } from "../utils/queries";
import SlideUp from './slideup';
import { BottomSheet } from 'react-spring-bottom-sheet'
import { Button, Col, Container, Card, Form, Row } from "react-bootstrap";
import 'react-spring-bottom-sheet/dist/style.css'

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

  const [open] = useState(true);
  // const [markedFountains, setMarkedFountains] = useState([]);

  const cards = data?.fountains || [];

  const popHeight = 670;

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
      <>
      <BottomSheet className='slideup'
      blocking = {false}
        open={open}
        header={
           <Container className="mt-5">
           <Row>
             <Col>
               <Form >
                 <Form.Control
                   type="search"
                   placeholder="Search"
                   className="me-2"
                   aria-label="Search"
                   style={{ width: '100%' }}
                 />
                 <Button>
                   Search
                 </Button>
               </Form>
             </Col>
           </Row>
         </Container>
        }
        snapPoints={({ maxHeight }) => {
          return [maxHeight - popHeight, maxHeight - 200];
        }}
      >
        {cards.map(({_id, place, address}) => {
          return (
          <Col mb="4">
            <Card key={_id} border='dark'>
              <Card.Body>
                <Card.Title>{address}</Card.Title>
                <Card.Text>{place}</Card.Text>
                {/* {Auth.loggedIn() && (
                  <Button
                    disabled={savedBookIds?.some((savedBookId) => savedBookId === book.bookId)}
                    className='btn-block btn-info'
                    onClick={() => handleSaveBook(book.bookId)}>
                    {savedBookIds?.some((savedBookId) => savedBookId === book.bookId)
                      ? 'This book has already been saved!'
                      : 'Save this Book!'}
                  </Button>
                )} */}
              </Card.Body>
            </Card>
          </Col>
          )
        })}
      </BottomSheet>
    </>
    <SlideUp isOpen = {isOpen} data = {infoWindowData} onClose = {() => setIsOpen(false)} />
    </div>
  );
};