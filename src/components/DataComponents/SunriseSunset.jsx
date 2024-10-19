import classes from './SunriseSunset.module.css'
import sunriseSunsetFunction from '../../hooks/sunriseSunsetFunction'
import sunriseSunsetCurrentTime from '../../hooks/sunriseSunsetCurrentTime'
import { useEffect } from 'react'
import { formatToLocalTime } from '../../services/weatherService'

export default function SunriseSunset({ sunrise, sunset, timezone, dt }) {
  let currentTimeInMinute = Number(formatToLocalTime(dt, timezone, "hh")) * 60 + Number(formatToLocalTime(dt, timezone, "mm"))
  if (formatToLocalTime(dt, timezone, "a") === "PM" && Number(formatToLocalTime(dt, timezone, "hh")) !== 12) {
    currentTimeInMinute += 720
  }

  if (formatToLocalTime(dt, timezone, "a") === "AM" && Number(formatToLocalTime(dt, timezone, "hh")) === 12) {
    currentTimeInMinute += 720
  }

  let sunriseInMinute = Number(formatToLocalTime(sunrise, timezone, "hh")) * 60 + Number(formatToLocalTime(sunrise, timezone, "mm"))
  if (formatToLocalTime(sunrise, timezone, "a") === "PM" && Number(formatToLocalTime(sunrise, timezone, "hh")) !== 12) {
    sunriseInMinute += 720
  }

  if (formatToLocalTime(sunrise, timezone, "a") === "AM" && Number(formatToLocalTime(sunrise, timezone, "hh")) === 12) {
    sunriseInMinute += 720
  }

  let sunsetInMinute = Number(formatToLocalTime(sunset, timezone, "hh")) * 60 + Number(formatToLocalTime(sunset, timezone, "mm"))
  if (formatToLocalTime(sunset, timezone, "a") === "PM" && Number(formatToLocalTime(sunset, timezone, "hh")) !== 12) {
    sunsetInMinute += 720
  }

  if (formatToLocalTime(sunset, timezone, "a") === "AM" && Number(formatToLocalTime(sunset, timezone, "hh")) === 12) {
    sunsetInMinute += 720
  }

  let sunriseDuration = sunsetInMinute - sunriseInMinute

  useEffect(() => {
    sunriseSunsetFunction(sunriseDuration, sunriseInMinute)
    sunriseSunsetCurrentTime(currentTimeInMinute)
  }, [sunriseDuration, sunriseInMinute, currentTimeInMinute])



  return (
    <div className="w-48 h-80 bg-zinc-800 rounded-3xl flex flex-col justify-start items-start">
      <div className="flex justify-start items-center border-b border-gray-600 px-7 gap-2 ml-3">
        <i className="fa-regular fa-sun text-gray-600 text-xs mt-1"></i>
        <p className="text-gray-600 text-xs mt-1 py-1">Sunrise - Sunset</p>
      </div>
      <div>
        <div className={classes.clock_container} id='clock_container'>
          <div className={classes.clock} id='clock'></div>
          <div className={classes.arrow} id='time_arrow'>
            <div className={classes.arrow_head}>
              <div className={classes.arrow_head2}></div>
            </div>
          </div>
          <div className={classes.clock_cover}>
            <div className='text-white text-2xl'>{formatToLocalTime(dt, timezone, "hh:mm a")}</div>
          </div>
        </div>
        <div className='flex items-center justify-start text-xs text-white ml-6 mt-5'>
          <i className="fa-solid fa-arrow-up text-sm"></i>
          <p className='text-sm ml-2'>Sunrise: </p>
          <b className='text-sm ml-1 text-teal-400'>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</b>
        </div>
        <div className='flex items-center justify-start text-xs text-white ml-6 mt-3'>
          <i className="fa-solid fa-arrow-down text-sm"></i>
          <p className='text-sm ml-2'>Sunset: </p>
          <b className='text-sm ml-1 text-teal-400'>{formatToLocalTime(sunset, timezone, "hh:mm a")}</b>
        </div>
      </div>
    </div>

  )
}