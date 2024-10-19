import { useFetch } from '../hooks/useFetch'
import CurrentPlace from './CurrentPlace'

export default function OptionsList({ changeCity, selectedCities }) {

  const { isFetching, error1, city } = useFetch()
  return (
    <div className="w-full flex items-center px-4 border-b h-24 border-solid border-zinc-800 m-auto overflow-x-scroll">
      {error1 ? (
        <div className="w-56 h-20 bg-zinc-800 rounded-3xl flex justify-center flex-col items-center">
          <b className="text-white text-xs">An error occured!</b>
          <p className="text-white text-center text-xs">Failed to fetch your current location.</p>
        </div>) : (<CurrentPlace isLoading={isFetching} city={city} changeCity={changeCity} />)}
      {selectedCities.map((city) => (
        <div key={city.name} className='min-w-48 h-16 bg-zinc-800 rounded-3xl flex justify-center items-center cursor-pointer ml-4'
          onClick={() => changeCity(city.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(" ", "+"))}>
          <b className='text-white text-sm'>{city.name} -</b>
          <p className='text-white ml-1 text-sm'>{city.country}</p>
        </div>
      ))}
    </div>
  )
}