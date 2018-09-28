import axios from 'axios';

const API_KEY = 'e2a0299cab93cdf338ab05524d37849f';
const ROOT_URL =  `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},lk`;
    const request = axios.get(url);

    console.log('Request :',request)

    return {
       type : FETCH_WEATHER, 
       payload : request
    };
}