import { WeatherType } from '../../actions/weather/types';
import { getWeather } from '../../../api/weather/endpoints';
import { AnyAction } from 'redux';

export const loadWeather = (city: string) => async (dispatch: React.Dispatch<AnyAction>) => {
  dispatch({
    type: WeatherType.GET_WEATHER_REQUEST
  });

  try {
    const res = await getWeather(city);
    dispatch({
      type: WeatherType.GET_WEATHER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: WeatherType.GET_WEATHER_FAIL,
      payload: err
    });
  }
};
