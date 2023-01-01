import React, { useState } from 'react'
import CurrentTemp from './CurrentTemp'
import TempUnitSelector from './TempUnitSelector'

const WeatherApp = () => {

  const [tempUnit, setTempUnit] = useState('celcius')

  return (
    <>
        <CurrentTemp tempUnit={tempUnit}/>
        <TempUnitSelector tempUnit={tempUnit} setTempUnit={setTempUnit}/>
    </>
  )
}

export default WeatherApp