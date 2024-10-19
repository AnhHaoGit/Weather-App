import temperatureUnitsFunction from "../../hooks/temperatureUnitsFunction"
import { iconUrlFromCode } from "../../services/weatherService"
export default function HourlyForecastDetail({ units, title, temp, icon }) {
  temp = Math.round(temp)
  return (
    <div className="flex flex-col items-center justify-start">
      <p className="text-white text-xs">{title}</p>
      <img src={iconUrlFromCode(icon)} alt="" className="w-12 mt-6" />
      <p className="text-white text-xl mt-6">{temp}{temperatureUnitsFunction(units)}</p>
    </div>
  )
}