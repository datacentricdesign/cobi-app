import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  API_KEY = 'YOUR_API_KEY';
  API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  constructor() { }

  async getCurrentWeather(lat: number, lon: number): Promise<any> {
    try {
      const response = await axios.get(this.API_URL, {
        params: {
          lat: lat,
          lon: lon,
          appid: this.API_KEY,
          units: 'metric'
        }
      });
      return response.data.main.temp;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
