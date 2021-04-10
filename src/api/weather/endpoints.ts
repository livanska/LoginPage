import { AxiosResponse } from 'axios';
import Axios from '../axios';
import { GetWeatherResponse } from './types';

const API_KEY = '8ee74cfdf2eb259b49f61cbbd3ac74fc';

export const getWeather = (city: string): Promise<GetWeatherResponse> => {
  return Axios.instance.get('', {
    params: {
      q: city,
      appid: API_KEY,
      lang: 'ua',
      units: 'metric'
    }
  });
};
