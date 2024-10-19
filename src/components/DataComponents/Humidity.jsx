import temperatureUnitsFunction from "../../hooks/temperatureUnitsFunction"

export default function Humidity({ humidity, dew_point, units }) {


  return (
    <div className="w-48 h-36 bg-zinc-800 rounded-3xl flex flex-col justify-start items-start">
      <div className="flex justify-start items-center border-b border-gray-600 px-12 ml-3 gap-1">
        <i className="fa-solid fa-water text-gray-600 text-xs mt-1"></i>
        <p className="text-gray-600 text-xs mt-1  py-1 ml-1">Humidity</p>
      </div>
      <div className="flex flex-col justify-start items-start mt-2 ml-3">
        <b className="text-teal-400 text-2xl mt-2">{Math.round(humidity)} %</b>
        <p className="text-white text-xs mt-8">The dew point is {Math.round(dew_point)}{temperatureUnitsFunction(units)}.</p>
      </div>
    </div>
  )
}