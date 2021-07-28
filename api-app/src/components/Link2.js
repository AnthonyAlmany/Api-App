import React from 'react'

function WeatherCard({ temperature, city, condition }) {
    return (
        <div className="cards">
            <div className="weather-card">
                <h3>{city}</h3>
                <h3>{temperature} °C</h3>
                <img src={condition} alt="conditions" width="100px" height="100px"></img>
            </div>
        </div>
    )
}

export default WeatherCard;
