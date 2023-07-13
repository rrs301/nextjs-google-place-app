import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React, { useContext } from 'react'
import { UserLocationContext } from '../context/UserLocationContext';
import Marker from './Marker';
import { SelectedBusinessContext } from '../context/SelectedBusinessContext';

function GoogleMap_() {
    const {userLocation,setUserLocation}=useContext(UserLocationContext)
    const {selectedBusiness,setSelectedBusiness}=useContext(SelectedBusinessContext)
    const containerStyle = {
        width: '100%',
        height: '500px',
        borderRadius:20
      };
  
      
  return (
    <div>
 <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
      >
      {userLocation?  
      <GoogleMap
          mapContainerStyle={containerStyle}
          center={
            !selectedBusiness.name?  {
                lat:userLocation.lat,
                lng:userLocation.lng
            }:selectedBusiness.geometry.location
          }
          zoom={selectedBusiness.name?15:10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <>
          <Marker userLocation={userLocation} />
          </>
        </GoogleMap>:null}
      </LoadScript>
    </div>
  )
}

export default GoogleMap_