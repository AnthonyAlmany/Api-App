import React from 'react'

function WeatherCard({ temperature, city, condition }) {
    return (
    
            <div className="weather-card">
                <h3>{city}</h3>
                <h3>{temperature} °C</h3>
                <img src={condition} alt="conditions"></img>
            </div>
    
    )
}

export default WeatherCard;
