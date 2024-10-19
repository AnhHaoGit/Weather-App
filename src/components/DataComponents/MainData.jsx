import { formatToLocalTime } from "../../services/weatherService"
import temperatureUnitsFunction from "../../hooks/temperatureUnitsFunction"
import { iconUrlFromCode } from "../../services/weatherService"
export default function MainData({ data, units }) {
  let temp = Math.round(data.temp)
  let temp_max = Math.round(data.temp_max)
  let temp_min = Math.round(data.temp_min)


  return (
    <div className="w-96 h-80 bg-zinc-800 rounded-3xl flex flex-col justify-start items-center">
      <p className="text-gray-600 text-sm mt-4">{formatToLocalTime(data.dt, data.timezone)}</p>
      <div className="flex items-center mt-2 pr-4">
        <img src={iconUrlFromCode(data.icon)} alt="" className="w-10" />
        <p className="text-white text-2xl">{data.name} {data.country}</p>
      </div>
      <b className="text-teal-400 text-6xl mt-5 pl-6">{temp}{temperatureUnitsFunction(units)}</b>
      <p className="text-white text-sm mt-4">{data.details}</p>
      <div className="border-t border-gray-600 flex justify-evenly align-items px-10 mt-16 pt-4 gap-20">
        <p className="text-white text-sm"><i className="fa-solid fa-arrow-up text-white"></i> High: {temp_max}{temperatureUnitsFunction(units)}</p>
        <p className="text-white text-sm"><i className="fa-solid fa-arrow-down text-white"></i> Low: {temp_min}{temperatureUnitsFunction(units)}</p>
      </div>
    </div>
  )
}