import { useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { RiBuildingLine, RiBuilding2Fill, RiBuilding2Line } from "react-icons/ri";
import {getCurrentDay, getCurrentDate} from '../../utils'
import { WiThunderstorm, WiDayLightning, WiShowers, WiRain, WiSnow, WiCloudyGusts, WiDayCloudy, WiCloudy} from "react-icons/wi";
import './weather-app.scss'
import { getRequest } from '../../services';

export default function WeatherApp() {
	const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [location, setLocation] = useState('');
  const [icon, setIcon] = useState('');
	const inputRef = useRef(null)

  const getWeatherIcon = (iconName, name) => {
    switch(iconName) {
      case 'Thunderstorm':
        return <WiThunderstorm className={name}/>
      case 'Drizzle':
        return <WiShowers className={name}/>
      case 'Rain':
        return <WiRain className={name}/>
      case 'Snow':
        return <WiSnow className={name}/>
      case 'Atmosphere':
        return <WiCloudyGusts className={name}/>
      case 'Clear':
        return <WiDayCloudy className={name}/>
      case 'Clouds':
        return <WiCloudy className={name}/>
    }
  }
  //   var weatherStatus = ['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Atmosphere', 'Clear',  'Clouds']

	// Handle Input
  const checkInput = (inputText) => {
    var acceptedInput = /^[A-Za-z]+$/;

    if(inputText.match(acceptedInput)){
      setLocation(inputText);
    } else {
      console.log('Change that shit')
    }
  }
  
  useEffect(() => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=97b75d478a2cde9f632cc4b03c44cfe1`;
    getRequest(URL)
      .then(res => setData(res))
  }, [location])

	// const handleModal = () => {
	// 	setShowModal((prev) => prev = !showModal)
	//  console.log(showModal)
	// }

	// Handle Search
  const handleSearch = () => {
    checkInput(inputRef.current.value);
		if(inputRef.current.value === '' || null) {
      console.log('walang laman')
    } else {
      setLocation(inputRef.current.value)
      if(location.includes(data)){
        console.log("no data")
      }else{
          data
          setIcon(data.weather[0].main)
      }
      // setIcon(data.weather[0].main)
      // handleModal()
    }
  }
  console.log("currData", data)
  console.log("icon", icon)
  return(
    <div className="weather-app">
			{
				!showModal ?
      <div className='container'>
				<div className="location-container">
					<RiBuilding2Line className='location-icon' />
					<p className='current-location'>{location ? `${data.name}` : '--'}</p>
				</div>
        <div className="weather-status-container">
					{/* <WiDayLightning className='weather-status-icon'/> */}
          {location ? getWeatherIcon(icon, 'weather-status-icon') : '--'}
          {/* <p>{location ? data.weather[0].description : '--'}</p> */}
					<div className="weather-status-data">
						<div className="date-container">
							<p className="current-day">{getCurrentDay()}</p>
							<p className="current-date">{getCurrentDate()}</p>
						</div>
						<div className="temperature-container">
							{/* <p className="current-temperature-num">{location ? data.main.temp.toFixed() : '--'}</p> */}
							<p className="current-temperature">{location ? '°C' : '--'}</p>
						</div>
					</div>
        </div>

        <div className="content">
          <div className="search-input-container">
            <BsSearch className='search-icon'/>
            <input type="text" ref={inputRef} placeholder='City_' />
          </div>
        </div>
				<button className='display-weather-btn' onClick={handleSearch}>Search</button>
      </div>
			: 
      <div className="modal" style={{display: `${showModal ? 'block' : 'none'}`}}>
				<h1>HAHAHAHA</h1>
        <button className='display-weather-btn' onClick={() => handleSearch(setShowModal(false))}>Search</button>
			</div>
			}
			
    </div>
  )
}