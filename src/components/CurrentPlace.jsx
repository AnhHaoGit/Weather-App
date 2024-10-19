export default function CurrentPlace({ isLoading, city, changeCity }) {
  return (
    <div
      className="min-w-48 h-16 bg-zinc-800 rounded-3xl flex justify-start items-center cursor-pointer ml-2 hover:bg-zinc-600"
      onClick={() => changeCity(city.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(" ", "+"))}>
      {isLoading && <p className="text-white text-xs text-center ml-2">Fetching your current location...</p>}
      {!isLoading && (
        <div className="ml-8">
          <p className="text-white text-sm">My Location</p>
          <p className="text-teal-400 font-bold text-xl mt-1">{city}</p>
        </div>

      )}
    </div>
  )
}