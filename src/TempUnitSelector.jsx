import React from 'react'

const TempUnitSelector = ({ tempUnit, setTempUnit }) => {

  return (
    <select value={tempUnit} onChange={(event) => setTempUnit(event.target.value)}>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="celcius">Celcius</option>
    </select>
  )
}

export default TempUnitSelector