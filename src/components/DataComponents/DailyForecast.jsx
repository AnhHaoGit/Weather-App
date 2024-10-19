import DailyForecastDetail from "./DailyForecastDetail";

export default function DailyForecast({ daily, units }) {
  return (
    <div className="w-full h-96 bg-zinc-800 rounded-3xl flex flex-col justify-start items-center mt-4">
      <p className="text-gray-600 text-xs mt-1 border-b border-gray-600 px-32 py-1">Daily Forecast</p>
      <main className="flex flex-col justify-start items-start">
        {daily.map((day) => (
          <DailyForecastDetail key={day.title} icon={day.icon} title={day.title} temp={day.temp} units={units} temp_max={day.temp_max} temp_min={day.temp_min} />
        ))}
      </main>
    </div>
  )
}