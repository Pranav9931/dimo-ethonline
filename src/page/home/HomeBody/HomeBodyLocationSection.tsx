import { Typography } from "@mui/material";
import { LocationSectionContainer } from "./index.styles";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import useUserTimezoneTime from "../../../utils/currentTime";
import 'leaflet/dist/leaflet.css';

import iconUrl from "leaflet/dist/images/marker-icon.png"
import shadowUrl from "leaflet/dist/images/marker-shadow.png"

// Custom marker icon (optional)
const markerIcon = new L.Icon({
  iconUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl,
  shadowSize: [41, 41],
});

const HomeBodyLocationSection = () => {
  const currentTime = useUserTimezoneTime();
  const [position, setPosition] = useState<[number, number]>([51.505, -0.09]); // Default position as a tuple

  useEffect(() => {
    // Get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setPosition([latitude, longitude] as [number, number]); // Explicitly cast to [number, number]
      });
    }
  }, []);

  return (
    <LocationSectionContainer>
      <Typography sx={{
        fontFamily: 'var(--main-font-med)',
        fontSize: '16px',
        marginBottom: '10px',
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
        LOCAL TIME
      </Typography>

      <Typography sx={{
        fontFamily: 'var(--main-font-med)',
        fontSize: '50px',
        marginBottom: '10px',
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
        {currentTime}
      </Typography>

      {/* Map Section */}
      <MapContainer 
        center={position} 
        zoom={13} 
        style={{ height: "200px", width: "100%" }}
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png"
        //   attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>
            You are here.
          </Popup>
        </Marker>
      </MapContainer>
    </LocationSectionContainer>
  );
};

export default HomeBodyLocationSection;
