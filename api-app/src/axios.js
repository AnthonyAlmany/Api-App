import axios from "axios"

const weather_API_KEY = "a01eef6d1e264f9886f53829210207";

const instanceBtc = axios.create({
    baseURL: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
});

const instanceEth = axios.create({
    baseURL: "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
});

const instanceLink = axios.create({
    baseURL: "https://api.coingecko.com/api/v3/simple/price?ids=chainlink&vs_currencies=usd",
});

const instanceWeather = axios.create({
    baseURL: `http://api.weatherapi.com/v1/current.json?key=${weather_API_KEY}&q=Sydney&aqi=no`,
})

export { instanceEth, instanceBtc, instanceLink, instanceWeather };
