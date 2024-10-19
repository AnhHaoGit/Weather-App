export default function CitiesList({ changeCity }) {
  return (
    <nav className="w-full text-xs flex justify-evenly items-center border-b h-8 border-solid border-zinc-800 m-auto text-white py-2">
      <button onClick={() => changeCity("hanoi")} className="hover:text-teal-400">Hanoi</button>
      <button onClick={() => changeCity("new+york")} className="hover:text-teal-400">New York</button>
      <button onClick={() => changeCity("sydney")} className="hover:text-teal-400">Sydney</button>
      <button onClick={() => changeCity("tokyo")} className="hover:text-teal-400">Tokyo</button>
      <button onClick={() => changeCity("london")} className="hover:text-teal-400">London</button>
      <button onClick={() => changeCity("paris")} className="hover:text-teal-400">Paris</button>
      <button onClick={() => changeCity("berlin")} className="hover:text-teal-400">Berlin</button>
      <button onClick={() => changeCity("beijing")} className="hover:text-teal-400">Beijing</button>
      <button onClick={() => changeCity("melbourne")} className="hover:text-teal-400">Melbourne</button>
      <button onClick={() => changeCity("moscow")} className="hover:text-teal-400">Moscow</button>
    </nav>
  )
}