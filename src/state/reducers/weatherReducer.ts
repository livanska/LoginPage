import { AnyAction } from 'redux';
import { WeatherType } from '../../state/actions/weather/types';

const initialState = {
  city: { name: 'Kyiv' },
  list: []
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case WeatherType.GET_WEATHER_REQUEST: {
      return {
        ...state
      };
    }

    case WeatherType.GET_WEATHER_SUCCESS: {
      return {
        ...state,
        city: action.payload.city,
        list: action.payload.list
      };
    }

    case WeatherType.GET_WEATHER_FAIL: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};
