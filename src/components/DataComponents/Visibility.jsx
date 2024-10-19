export default function Visibility({ visibility }) {
  let description
  if (visibility <= 50) {
    description = "Dense fog"
  } else if (visibility > 50 && visibility <= 200) {
    description = "Thick fog"
  } else if (visibility > 200 && visibility <= 500) {
    description = "Fog"
  } else if (visibility > 500 && visibility <= 1000) {
    description = "Mod fog"
  } else if (visibility > 1000 && visibility <= 2000) {
    description = "Mist, haze"
  } else if (visibility > 2000 && visibility <= 3500) {
    description = "Poor visibility"
  } else if (visibility > 3500 && visibility <= 8600) {
    description = "Moderate visibility"
  } else if (visibility > 8600 && visibility <= 10000) {
    description = "Good Visibility"
  } 

  return (
    <div className="w-48 h-[9rem] bg-zinc-800 rounded-3xl flex flex-col justify-start items-start">
      <div className="flex justify-start items-center border-b border-gray-600 px-12 gap-2 ml-3">
        <i className="fa-regular fa-eye text-gray-600 text-xs mt-1"></i>
        <p className="text-gray-600 text-xs mt-1 py-1">Visibility</p>
      </div>
      <div className="flex flex-col justify-start items-start">
        <b className="text-teal-400 text-3xl ml-3 mt-2">{visibility/1000} km</b>
        <p className="text-xs text-white ml-3 mt-8">{description}</p>
      </div>
    </div>
  )
}