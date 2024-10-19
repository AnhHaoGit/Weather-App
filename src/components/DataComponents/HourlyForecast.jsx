import HourlyForecastDetail from "./HourlyForecastDetail";

export default function HourlyForecast({ units, hourly }) {
  return (
    <div className="w-96 h-52 bg-zinc-800 rounded-3xl flex flex-col justify-start items-center">
      <p className="text-gray-600 text-xs mt-1 border-b border-gray-600 px-32 py-1">Hourly Forecast</p>
      <div className="flex items-center justify-evenly px-4 mt-6 gap-4">
        {hourly.map((hour) => (
          <HourlyForecastDetail key={hour.title} units={units} title={hour.title} temp={hour.temp} icon={hour.icon}/>
        ))}
      </div>
    </div>
  )
}