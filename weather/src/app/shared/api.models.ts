export type weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type searchResult = {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  dt: number;
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
  };
  weather: weather[];
};

export type searchResults = {
  message: string;
  cod: string;
  count: number;
  list: searchResult[];
};

export type hourWeather = {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: weather[];
};

export type dayWeather = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  wind_speed: number;
  wind_deg: number;
  weather: weather[];
};

export type currentWeather = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: weather[];
};

export type weatherResult = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: currentWeather;
  hourly: hourWeather[];
  daily: dayWeather[];
};
