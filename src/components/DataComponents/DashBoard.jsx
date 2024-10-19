import DailyForecast from "./DailyForecast";
import Precipitation from "./Precipitation";
import Humidity from "./Humidity";
import UvIndex from "./UvIndex";
import SunriseSunset from "./SunriseSunset";
import FeelsLike from "./FeelsLike";
import Pressure from "./Pressure";
import Visibility from "./Visibility";
import Wind from "./Wind";
import HourlyForecast from "./HourlyForecast";
import MainData from "./MainData";
import MoonPhase from "./MoonPhase";

export default function DashBoard({ data, units }) {
  return (
    <>
      <main className="flex w-full justify-start items-center mt-4 px-6">
        <div className="flex flex-col justify-evenly items-center ">
          <div className="flex justify-evenly items-center gap-4">
            <Precipitation precipitation={data.precipitation} />
            <Humidity humidity={data.humidity} dew_point={data.dew_point} units={units} />
          </div>
          <DailyForecast units={units} daily={data.daily} />
        </div>
        <div className=" flex flex-col justify-evenly items-center  ml-4 gap-4">
          <MainData data={data} units={units} />
          <HourlyForecast units={units} hourly={data.hourly} />
        </div>
        <div className="flex justify-evenly items-center ml-4 gap-4">
          <div className="flex flex-col justify-evenly items-center gap-4">
            <UvIndex uvIndex={data.uvi} />
            <SunriseSunset sunrise={data.sunrise} sunset={data.sunset} timezone={data.timezone} dt={data.dt} />
          </div>
          <div className="flex flex-col justify-evenly items-center gap-4">
            <FeelsLike feels_like={data.feels_like} units={units} />
            <Pressure pressure={data.pressure} />
            <MoonPhase moon_phase={data.moon_phase} moonrise={data.moonrise} moonset={data.moonset} timezone={data.timezone} />
          </div>
          <div className="flex flex-col justify-evenly items-center gap-4">
            <Visibility visibility={data.visibility} />
            <Wind wind_deg={data.wind_deg} wind_gust={data.wind_gust} wind_speed={data.wind_speed} units={units} />
          </div>
        </div>

      </main>
    </>
  )
}