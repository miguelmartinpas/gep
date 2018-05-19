import axios from 'axios';

const API_KEY = '6a78596d062df78380eff5944c4e5567';
const openWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_USERS = 'FETCH_USERS';
export function fetchUsers(city = 'malaga') {
  const url = `${openWeatherUrl}&q=${city}`;
  const request = axios.get(url);
  console.log('action oeoeooee');
  return {
    type: FETCH_USERS,
    payload: request
  };
}
