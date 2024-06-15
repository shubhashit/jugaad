import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import AddRequest from './AddRequest'
import MainFeed from './MainFeed'
import Footer from './Footer'
import { MapContainer, TileLayer, useMap , Popup ,Marker } from 'react-leaflet'// import "leftlet/dist/leftlet.css" ;

export default function LandingPage() {
  // var map = <Lating></Lating>.map('map', {
  //   center: [51.505, -0.09],
  //   zoom: 13
  // });
  const [center, setCenter] = useState([13.084622, 80.248357])
  const zoomLevel = 13;
  const mapref = useRef()
  
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [status, setStatus] = useState(null);

  useEffect(() => { 
    const getLocation = () => {
      if (!navigator.geolocation) {
        setStatus('Geolocation is not supported by your browser');
      } else {
        setStatus('Locating...');
        navigator.geolocation.getCurrentPosition((position) => {
          setStatus(null);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        }, () => {
          setStatus('Unable to retrieve your location');
        });
      }
    };

    getLocation();
  }, []);
  

  return (
    <div id='status' className='h-[100vh] w-[100vw] bg-[#e5e7eb] overflow-x-hidden'>
      <Navbar />
      <AddRequest />
      {latitude && longitude && <div className='h-[20rem] w-full p-10'>

        <MapContainer className='h-full w-full' center={[latitude, longitude]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=1EbFcZKzYGkQgRHfD1Hr"
          />
          <Marker position={[latitude, longitude]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>}
      <MainFeed />
      <Footer />
    </div>
  )
}
