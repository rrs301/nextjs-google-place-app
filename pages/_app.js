import { useEffect, useState } from 'react'
import '../styles/globals.css'
import { UserLocationContext } from '../context/UserLocationContext'

function MyApp({ Component, pageProps }) {
  const [userLocation,setUserLocation]=useState([])
  useEffect(()=>{
    getUserLocation()
  },[])
  const getUserLocation=()=>{
    navigator.geolocation.getCurrentPosition(function(pos){
      
      setUserLocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })
    })
  }
  return (
  <UserLocationContext.Provider value={{userLocation,setUserLocation}}>
    <Component {...pageProps} />
  </UserLocationContext.Provider>
  )
}

export default MyApp
