import { useCallback, useMemo, useState } from 'react';
import * as _ from 'lodash';
import { WeatherInformation } from '../models/WeatherInformation';

export const usePagination = (weatherInfo: WeatherInformation[]) => {
  const [weather, setWeather] = useState<WeatherInformation[]>(weatherInfo);
  const [page, setPage] = useState<number>(0);

  const { dayWeather, total, data } = useMemo(() => {
    let dailySplitedWeather = _.values(
      _.groupBy(weatherInfo, function (day) {
        return day.dt_txt.toString().substr(0, 10);
      })
    );

    let dayWeather = dailySplitedWeather[page];
    let total = dailySplitedWeather.length;

    let data = weatherInfo.length !== 0 ? dayWeather[0].dt_txt.toString().substr(0, 10) : 'h';
    console.log(dayWeather);

    return { dayWeather, total, data };
  }, [page, weather, weatherInfo]);

  const changePage = useCallback(
    (active: number) => {
      if (active < total && active >= 0) setPage(active);
    },
    [total]
  );

  return {
    dayWeather,
    total,
    changePage,
    page,
    data,
    isLoading: weatherInfo.length === 0
  };
};
