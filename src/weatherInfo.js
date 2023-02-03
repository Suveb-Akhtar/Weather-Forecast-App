import React from 'react'

import ReactAnimatedWeather from 'react-animated-weather';
const defaults = {
    icon: 'CLEAR_DAY',
    color: 'white',
    size: 100,
    animate: true
  };
function WeatherInfo(props) {
    var weatherIcon = null;
    switch(props.weatherName){
        case "Haze":
        weatherIcon = 'CLOUDY';
        break;
        case "Rain":
        weatherIcon = 'RAIN';
        break;
        case "RAIN":
        weatherIcon = 'CLOUDY'
        default:
        weatherIcon = 'CLEAR_DAY'  
    }
    return (
        <React.Fragment>
            <div className="col-4 side-bg text-center py-3">
                <ReactAnimatedWeather
                    icon={weatherIcon}
                    color={defaults.color}
                    size={defaults.size}
                    animate={defaults.animate}
                />
                <h2 className="text-white py-3">{props.weatherName}</h2>
                <div className="d-flex flex-wrap">
                    <div className="d-flex col-12 py-2">
                        <div className="text-white"><strong>Humidity</strong></div>
                        <div className="text-white ml-auto">{props.humidity}%</div>
                    </div>
                    <div className="d-flex col-12 py-2">
                        <div className="text-white"><strong>Visiblity</strong></div>
                        <div className="text-white ml-auto">{props.visiblity} mi</div>
                    </div>
                    <div className="d-flex col-12 py-2">
                        <div className="text-white"><strong>Wind Speed</strong></div>
                        <div className="text-white ml-auto">{props.windSpeed} Km/h</div>
                    </div>
                    <div className="d-flex col-12 py-2">
                        <div className="text-white"><strong>Feels Like</strong></div>
                        <div className="text-white ml-auto">{props.feelsLike}°C</div>
                    </div>
                    <div className="d-flex col-12 py-2">
                        <div className="text-white"><strong>Max Temp</strong></div>
                        <div className="text-white ml-auto">{props.maxTemp}°C</div>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    );
}
export default WeatherInfo;