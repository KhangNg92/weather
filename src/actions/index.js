import axios from 'axios';


const API_KEY = '58a13211a65ca6fb7beafab00a223d15';
//es6 syntax backtick with dollar sign and curly brackets
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// not risky for string
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);


    return {
        type: FETCH_WEATHER,
        // we return the promise on payload
        // redux will wait for the request and exchange the data in to the 
        payload: request
    }
}