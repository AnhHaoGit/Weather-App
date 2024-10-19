export default function Precipitation({ precipitation }) {
  let text
  if (precipitation !== 0) {
    precipitation = precipitation["1h"]
  }
  if (precipitation === 0) {
    text = "No rain"
  } else if (precipitation > 0 && precipitation <= 2.5) {
    text = "Light rain"
  } else if (precipitation > 2.5 && precipitation <= 7.5) {
    text = "Moderate rain"
  } else if (precipitation > 7.5 && precipitation <= 50) {
    text = "Heavy rain"
  } else if (precipitation > 50) {
    text = "Violent rain"
  }
  return (
    <div className="w-48 h-36 bg-zinc-800 rounded-3xl flex flex-col justify-start items-start">
      <div className="flex justify-start items-center border-b border-gray-600 px-10 ml-3 gap-1">
        <i className="fa-solid fa-droplet text-gray-600 text-xs mt-1"></i>
        <p className="text-gray-600 text-xs mt-1  py-1 ml-1">Precipitation</p>
      </div>
      <div className="flex flex-col justify-start items-start ml-4 mt-2">
        <b className="text-teal-400 text-2xl mt-2">{precipitation} mm/h</b>
        <p className="text-white text-xs mt-8">{text}</p>
      </div>
    </div>
  )
}