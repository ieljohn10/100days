import { useRef } from 'react';
import './weather-app.scss'
import { BsSearch } from 'react-icons/bs'

export default function WeatherApp() {
  const inputRef = useRef(null)

  const checkInput = (inputText) => {
    var acceptedInput = /^[A-Za-z]+$/;
    console.log('input value', inputText)
    if(inputText.match(acceptedInput)){
      console.log('nice')
    } else {
      console.log('Change that shit')
    }
  }

  const handleSearch = () => {
    checkInput(inputRef.current.value)
    console.log('click')
  }

  return(
    <div className="weather-app">
      <div className='container'>
        <div className="weather-image-container">
          
        </div>
        <div className="content">
          <div className="search-input-container">
            <BsSearch className='search-icon'/>
            <input type="text" ref={inputRef} placeholder='City' />
          </div>
          <button className='display-weather-btn' onClick={handleSearch}>Display Weather</button>
        </div>
      </div>
    </div>
  )
}

// import { WiCloud, WiCloudyGusts, WiCloudyWindy, WiCloudy, WiDayCloudyGusts, WiDayCloudyHigh, WiDayCloudyWindy, WiDayCloudy, WiDayFog, WiDayLightning, WiDayRainMix, WiDayThunderstorm, WiDayStormShowers, WiDayShowers, WiDayWindy } from "react-icons/wi";
