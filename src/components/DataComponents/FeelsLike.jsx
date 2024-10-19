import temperatureUnitsFunction from "../../hooks/temperatureUnitsFunction"

export default function FeelsLike({ feels_like, units }) {
  feels_like = Math.round(feels_like)

  return (
    <div className="w-48 h-[9rem] bg-zinc-800 rounded-3xl flex flex-col justify-start items-start">
      <div className="flex justify-start items-center border-b border-gray-600 px-12 gap-2 ml-3">
        <i className="fa-solid fa-temperature-three-quarters text-gray-600 text-xs mt-1"></i>
        <p className="text-gray-600 text-xs mt-1 py-1">Feels like</p>
      </div>
      <div className="flex flex-col justify-start items-start">
        <b className="text-teal-400 text-2xl ml-3 mt-2">{feels_like}{temperatureUnitsFunction(units)}</b>
        <p className="text-xs text-white ml-3 mt-7 ">Depending on wind, humidity, and cloudiness.</p>
      </div>
    </div>
  )
}