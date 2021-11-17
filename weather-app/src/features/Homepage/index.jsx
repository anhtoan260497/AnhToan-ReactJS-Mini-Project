import React, { useEffect, useState } from 'react';
import CurrentLocation from './components/CurrentLocation';

function Homepage() {

    const [currentLocation, setCurrentLocation] = useState() // state for current location

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
           setCurrentLocation([position.coords.latitude, position.coords.longitude])
          });
    },[]) // get current location [lat,lon]

   if(currentLocation){
       console.log(currentLocation)
   }
    
    return (
        <div>
            <CurrentLocation />
        </div>
    );
}

export default Homepage;