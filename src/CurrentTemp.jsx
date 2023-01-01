import React, { useState, useEffect } from 'react'

const CurrentTemp = ({ tempUnit }) => {

   let [temp, setTemp] = useState(0)
   let lat = 40.71
   let long = -74.00
//    let tempUnitString = tempUnit === 'fahrenheit' ? '&temperature_unit=fahrenheit' : ''
   let tempUnitCapi = tempUnit.charAt(0).toUpperCase() + tempUnit.slice(1)

   useEffect(() => { 
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m${tempUnit === 'fahrenheit' ? '&temperature_unit=fahrenheit' : ''}`)
        .then(res => res.json())
        .then(data => setTemp(data.hourly.temperature_2m[20]))
    }, [tempUnit])

  return (
    <>
        <h1>Weather App</h1>
        <p>{temp > 0 ? `Current Temperature: ${temp} ${tempUnitCapi}` : 'Loading...' }</p>
    </>
  )
}

export default CurrentTemp