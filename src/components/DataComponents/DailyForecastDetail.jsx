import temperatureUnitsFunction from "../../hooks/temperatureUnitsFunction"
import { iconUrlFromCode } from "../../services/weatherService"
export default function DailyForecastDetail({ icon, title, temp, units, temp_max, temp_min }) {
  temp = Math.round(temp)
  temp_min = Math.round(temp_min)
  temp_max = Math.round(temp_max)
  return (
    <div className="flex justify-start items-center mt-4">
      <div className="w-24 h-8 flex items-center justify-start rounded-3xl border-gray-600 border-2">
        <p className="text-sm text-white ml-3 w-4">{title}</p>
        <img src={iconUrlFromCode(icon)} alt="" className="w-8 ml-6" />
      </div>
      <div className="w-56 h-8 flex items-center justify-around rounded-3xl ml-4 border-gray-600 border-2">
        <p className="text-sm text-white">{temp_min}{temperatureUnitsFunction(units)}</p>
        <b className="text-sm text-teal-400">{temp}{temperatureUnitsFunction(units)}</b>
        <p className="text-sm text-white">{temp_max}{temperatureUnitsFunction(units)}</p>
      </div>
    </div>
  )
}