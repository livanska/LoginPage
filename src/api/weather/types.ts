import { AxiosResponse } from 'axios';
import { WeatherInformation } from '../../models/WeatherInformation';

export interface WeatherResponse {
  city: {
    name: string;
    country: string;
    coord: {
      lat: number;
      lon: number;
    };
  };
  list: WeatherInformation[];
}

interface PaginationResponse<T> {
  config: object;
  data: T;
  headers: object;
  request: object;
  status: number;
  statusText: string;
}

export type GetWeatherResponse = AxiosResponse<PaginationResponse<WeatherInformation>>;
