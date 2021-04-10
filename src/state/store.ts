import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import WeatherReducer from './reducers/weatherReducer';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));
