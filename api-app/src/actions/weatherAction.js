import axios from "axios";
import { weather } from "../axios"

export const loadWeather = () => async (dispatch) => {
    const weatherData = await axios.get(weather);
    dispatch({
        type: "FETCH_WEATHER",
        payload: {
            temperature: weatherData.data.current.temp_c,
            condition: weatherData.data.current.condition.icon,
            city: weatherData.data.location.name,
        }
    })
}