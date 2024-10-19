import Header from "./components/Header"
import CitiesList from "./components/CitiesList"
import OptionsList from "./components/OptionsList"
import DashBoard from "./components/DataComponents/DashBoard"
import getFormattedWeatherData from "./services/weatherService"
import { useEffect, useState } from "react"

export default function App() {
  const [query, setQuery] = useState("")
  const [units, setUnits] = useState("metric")
  const [weather, setWeather] = useState(null)
  const [selectedCities, setSelectedCities] = useState([])
  const [selectedCitiesName, setSelectedCitiesName] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (query !== "") {
      const fetchWeather = async () => {
        setError(null)
        setIsLoading(true)
        try {
          const data = await getFormattedWeatherData({ ...query, units })
          setWeather(data)
        } catch (error) {
          setError({ messaged: 'Failed to fetch data.' })
          console.log(error)
        }
        setIsLoading(false)
      }
      fetchWeather()
    }
  }, [query, units])

  function changeCity(name) {
    setWeather(null)
    setQuery({ q: name })
  }

  function changeUnits(unit) {
    setWeather(null)
    setUnits(unit)
  }

  let metricClassName = "ml-6 py-1 px-2 rounded-lg hover:bg-zinc-800"
  let imperialClassName = "ml-2 py-1 px-2 rounded-lg hover:bg-zinc-800"

  if (units === "metric") {
    metricClassName += " bg-zinc-800"
  } else if (units === "imperial") {
    imperialClassName += " bg-zinc-800"
  }

  function handleOnSearchChange(searchData) {
    let name = searchData.name
    name = name.replace(" ", "+")
    setWeather(null)
    setQuery({ q: name })
  }

  function addSelectedCity(data) {
    if (weather === null) {
      alert("You have to choose a city before adding your city to selected cities list.")
    } else {
      let index = selectedCitiesName.indexOf(data.name)
      if (index === -1) {
        setSelectedCities([...selectedCities, {
          name: data.name,
          country: data.country
        }])
        setSelectedCitiesName([...selectedCitiesName, data.name])
      } else {
        alert("You have already added this city into the selected cities list.")
      }
    }
  }

  let data = { weather }.weather


  return (
    <>
      <Header onSearchChange={handleOnSearchChange} />
      <CitiesList changeCity={changeCity} />
      <OptionsList changeCity={changeCity} selectedCities={selectedCities} />
      <div className="w-full h-6 text-xl text-white flex justify-between items-center mt-4">
        <div className="flex justify-start items-center">
          <button className={metricClassName} onClick={() => changeUnits("metric")}>°C</button>
          <p className="ml-2">|</p>
          <button className={imperialClassName} onClick={() => changeUnits("imperial")}>°F</button>
        </div>
        <div className="cursor-pointer flex justify-center items-center mr-6 rounded-full border-2 border-white w-8 h-8 hover:bg-zinc-800"
          onClick={() => addSelectedCity(data)}>+</div>
      </div>
      <main>
        {query !== "" && isLoading &&
          <p className="text-white m-auto w-80 h-32 rounded-3xl flex justify-center items-center text-3xl mt-32">Loading data...</p>
        }
        {query !== "" && weather &&
          <DashBoard data={{ ...weather }} units={units} />
        }
        {query === "" &&
          <div className="text-white m-auto w-80 h-32 rounded-3xl flex justify-center items-center text-3xl mt-32">Choose your city.</div>
        }

        {error &&
          <>
            <p className="text-white m-auto w-80 rounded-3xl flex justify-center items-center text-3xl mt-40">An error occured!</p>
            <p className="text-white m-auto w-80 rounded-3xl flex justify-center items-center text-3xl mt-4">{error.messaged}</p>
          </>
        }
      </main>
    </>
  )
}
