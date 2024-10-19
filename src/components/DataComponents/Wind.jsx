import classes from './Wind.module.css'
import windDirection from '../../hooks/windDirection'
import { useEffect } from 'react'
import speedUnitsFunction from '../../hooks/speedUnitsFunction'

export default function Wind({ wind_deg, wind_gust, wind_speed, units }) {
  let scalesClasses = []
  let windDirectionDescription
  
  function getNumberOfScales() {
    for (let i = 1; i <= 90; i++) {
      scalesClasses.push("scale scale_" + i)
    }
  }
  getNumberOfScales()
  useEffect(() => {
    windDirection(wind_deg)
  }, [wind_deg])

  if (wind_deg === 0) {
    windDirectionDescription = "N"
  } else if (wind_deg > 0 && wind_deg < 90) {
    windDirectionDescription = "NE"
  } else if (wind_deg === 90) {
    windDirectionDescription = "E"
  } else if (wind_deg > 90 && wind_deg < 180) {
    windDirectionDescription = "SE"
  } else if (wind_deg === 180) {
    windDirectionDescription = "S"
  } else if (wind_deg > 180 && wind_deg < 270) {
    windDirectionDescription = "SW"
  } else if (wind_deg === 270) {
    windDirectionDescription = "W"
  } else if (wind_deg > 270 && wind_deg < 360) {
    windDirectionDescription = "NW"
  } else if (wind_deg === 360) {
    windDirectionDescription = "N"
  } else {
    return
  }
  return (
    <div className="w-48 h-96 bg-zinc-800 rounded-3xl flex flex-col justify-start items-start" >
      <div className="flex justify-start items-center border-b border-gray-600 px-16 gap-2 ml-2">
        <i className="fa-solid fa-wind text-gray-600 text-xs mt-1"></i>
        <p className="text-gray-600 text-xs mt-1 py-1">Wind</p>
      </div>
      <div className={classes.compass}>
        <div className={classes.arrow} id='arrow'>
          <div className={classes.arrow_start}></div>
          <i className="fa-solid fa-play arrow_end"></i>
        </div>
        <div className={classes.cover}>
          <p>N</p>
          <div className={classes.horizontal_directions}>
            <p>W</p>
            <p>E</p>
          </div>
          <p className={classes.south}>S</p>
        </div>
        <div className={classes.wind_speed}>
          <b className={classes.speed_value}>{Math.round(wind_speed)}</b>
          <p className={classes.speed_unit}>{speedUnitsFunction(units)}</p>
        </div>

        {scalesClasses.map((scale) => {
          return (
            <div className={scale} key={scale}></div>
          )
        })}
      </div>
      <div className='flex justify-start items-center mt-6 ml-8'>
        <i className="fa-regular fa-compass text-sm text-gray-600"></i>
        <p className='text-white text-sm ml-2'>Wind from</p>
        <b className='text-teal-400 text-sm ml-1'>{windDirectionDescription}</b>
      </div>
      <div className='flex justify-start items-center mt-6 ml-6'>
        <i className="fa-solid fa-bars-staggered text-sm text-gray-600"></i>
        <p className='text-white text-sm ml-2'>Wind gust: </p>
        <b className='text-teal-400 text-sm ml-1'>{wind_gust}</b>
        <p className='text-white text-sm ml-1'>{speedUnitsFunction(units)}</p>
      </div>
    </div>
  )
}