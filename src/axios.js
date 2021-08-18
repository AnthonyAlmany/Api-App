import axios from "axios"


const instanceStockQuote = (apiName) => axios.create({
    baseURL: `https://api.coingecko.com/api/v3/simple/price?ids=${apiName}&vs_currencies=usd`
})

const instanceWeather = (city) => axios.create({
    baseURL: `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&aqi=no`,
})

export { instanceWeather, instanceStockQuote };
