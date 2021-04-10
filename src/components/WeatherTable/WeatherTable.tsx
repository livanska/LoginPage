import { useEffect, useState } from 'react';
import { WeatherResponse } from '../../api/weather';
import { useDispatch, useSelector } from 'react-redux';
import { weatherSelector } from '../../state/selectors/weatherSelector';
import { loadWeather } from '../../state/actions/weather/actions';
import { usePagination } from '../../hooks/usePagination';
import { WeatherInformation } from '../../models/WeatherInformation';
import { TimeWeatherBlock } from '../TimeWeatherBlock/TimeWeatherBlock';
import css from './WeatherTable.module.scss';
import { Form, Formik } from 'formik';
import React from 'react';
import { FormikInput } from '../shared/formikAdapters.ts/FormikInput';
import { cityValueSchema } from '../../utils/validation-schemas';

interface cityValue {
  city: string;
}
const defaultValue: cityValue = {
  city: 'Kyiv'
};

export const WeatherTable = () => {
  const dispatch = useDispatch();
  const weatherResponseData: WeatherResponse = useSelector(weatherSelector);
  const [city, setCity] = useState<string>(weatherResponseData.city.name);

  useEffect(() => {
    dispatch(loadWeather(city));
  }, []);

  const { dayWeather, total, changePage, isLoading, page, data } = usePagination(weatherResponseData.list);

  return (
    <div className={css.wrapper}>
      <Formik
        validationSchema={cityValueSchema}
        initialValues={defaultValue}
        onSubmit={() => {
          dispatch(loadWeather(city));
        }}
      >
        <Form>
          <FormikInput
            name='city'
            label='Місто(англійською): '
            value={city}
            onChange={(e: any) => setCity(e.target.value)}
          />
          <button type='submit'>Шукати</button>
        </Form>
      </Formik>

      {!isLoading && (
        <p>
          Погода на {data} у {weatherResponseData.city.name} Розташування:{' '}
          {weatherResponseData.city.coord.lat} {weatherResponseData.city.coord.lon}
        </p>
      )}
      {isLoading && <p>Завантаження прогнозу...</p>}
      {dayWeather &&
        dayWeather.map((timeWeather: WeatherInformation) => <TimeWeatherBlock {...timeWeather} />)}
      <div>
        <button onClick={() => changePage(page - 1)}>Попередній день</button>
        <span>
          Сторінка: {page + 1} з {total}
        </span>
        <button onClick={() => changePage(page + 1)}>Наступний день</button>
      </div>
    </div>
  );
};
