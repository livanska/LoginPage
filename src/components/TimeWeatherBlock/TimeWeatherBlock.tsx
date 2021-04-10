import { WeatherInformation } from '../../models/WeatherInformation';
import css from './TimeWeatherBlock.module.scss';

export const TimeWeatherBlock = ({ wind, weather, dt_txt, main }: WeatherInformation) => {
  return (
    <div className={css.block}>
      <div className={css.block__time}>
        {dt_txt.substring(10, 16)}
        <span> {weather[0].description} </span>
      </div>
      <div className={css.block__info}>
        <div className={css.block__info}>
          <span> Температура: {main.temp} C </span>
          <span> Вологість: {main.humidity}% </span>
        </div>
        <div className={css.block__info}>
          <span> Тиск: {main.pressure}гПа </span>
          <span> Швидкість вітру: {wind.speed}м\с</span>
        </div>
      </div>
    </div>
  );
};
