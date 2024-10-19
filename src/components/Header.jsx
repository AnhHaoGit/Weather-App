import { AsyncPaginate } from "react-select-async-paginate"
import { GEO_API_URL, geoApiOptions } from "../hooks/cityApi"
import { useState } from "react"

export default function Header({ onSearchChange }) {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: '30px',
      width: "77rem",
      paddingLeft: "1rem",
      border: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#3699FF' : null,
      color: state.isFocused ? 'white' : null,
    }),
  }

  const [search, setSearch] = useState(null)

  async function loadOptions(inputValue) {
    try {
      const response = await fetch(`${GEO_API_URL}?minPopulation=100000&namePrefix=${inputValue}`, geoApiOptions);
      const result = await response.json();
      return {
        options: result.data.map((city) => {
          return {
            label: `${city.name}, ${city.countryCode}`,
            name: city.name
          }
        })
      }

    } catch (error) {
      console.error(error);
      return error
    }
  }

  function handleOnChange(searchData) {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  return (
    <>
      <header className="flex p-4 w-full justify-between items-center border-b border-solid border-zinc-800 m-auto">
        <p className="text-sm px-10 py-2 bg-teal-400 rounded-3xl ">WEATHER APP</p>
        <AsyncPaginate
          placeholder="Search for city"
          debounceTimeout={600}
          styles={customStyles}
          onChange={handleOnChange}
          loadOptions={loadOptions}
        />
      </header>
    </>
  )
}