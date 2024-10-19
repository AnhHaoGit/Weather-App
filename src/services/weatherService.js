import { DateTime } from "luxon";

const API_KEY = '7a92bbaee66cd400bab96c582294a8fa'

//Fetching current weather data
const getCurrentWeatherData = async (city, units) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => error)
}

//Fetching forecast weather data
const getForecastWeatherData = async ({ lat, lon, units }) => {
  return fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${API_KEY}&units=${units}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => error)
}

//Format current weather data
const formatCurrentWeatherData = (data) => {
  const {
    coord: { lat, lon },
    main: { temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    rain
  } = data


  let precipitation
  if (rain === undefined) {
    precipitation = 0
  } else {
    precipitation = rain
  }

  const { main: details, icon } = weather[0]

  return {
    lat, lon, humidity, name, dt, country, sunrise, sunset, details, icon, precipitation, temp_min, temp_max
  }
}

//Format forecast weather data
const formatForecastWeatherData = (data) => {
  let { timezone, daily, hourly, } = data
  const old_daily = daily
  daily = daily.slice(1, 8).map(d => {
    return {
      title: formatToLocalTime(d.dt, timezone, 'ccc'),
      temp: d.temp.day,
      temp_max: d.temp.max,
      temp_min: d.temp.min,
      icon: d.weather[0].icon
    }
  })

  hourly = hourly.slice(1, 6).map(d => {
    return {
      title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
      temp: d.temp,
      icon: d.weather[0].icon
    }
  })
  const { pressure, dew_point, uvi, visibility, wind_deg, wind_speed, temp, feels_like } = data.current

  const windGust = data.current.wind_gust
  let wind_gust
  if (windGust === undefined) {
    wind_gust = 0
  } else {
    wind_gust = windGust
  }

  const { moon_phase, moonrise, moonset } = old_daily[0]
  return {
    timezone,
    daily,
    hourly,
    dew_point,
    pressure,
    uvi,
    visibility,
    wind_deg,
    wind_gust,
    wind_speed,
    moon_phase,
    moonrise,
    moonset,
    temp,
    feels_like
  }
}

//Mix fetching data function and formatting data function together and return final data
const getFormattedWeatherData = async (searchParams) => {
  const units = searchParams.units
  const city = searchParams.q
  const formattedCurrentWeatherData = await getCurrentWeatherData(city, units).then((data) => {
    return formatCurrentWeatherData(data)
  })
  const { lat, lon } = formattedCurrentWeatherData
  const formattedForecastWeatherData = await getForecastWeatherData({
    lat,
    lon,
    units
  }).then((data) => {
    return formatForecastWeatherData(data)
  })
  return { ...formattedForecastWeatherData, ...formattedCurrentWeatherData }
}


//Format all seconds to the local time
const formatToLocalTime =
  (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

//Format the icon code
const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`

export default getFormattedWeatherData

export { formatToLocalTime, iconUrlFromCode }
