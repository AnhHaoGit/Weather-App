import fullMoon from '../../assets/Full Moon.png'
import firstQuarterMoon from '../../assets/First Quarter Moon.png'
import thirdQuarterMoon from '../../assets/Third Quarter Moon.png'
import waxingCrescent from '../../assets/Waxing Crescent.png'
import waningCrescent from '../../assets/Waning Crescent.png'
import waxingGibbous from '../../assets/Waxing Gibbous.png'
import waningGibbous from '../../assets/Waning Gibbous.png'
import { formatToLocalTime } from '../../services/weatherService'

export default function MoonPhase({ moon_phase, moonrise, moonset, timezone }) {
  let moonPhaseImage
  let moonPhaseImageClasses = 'w-28 rounded-full opacity-70'
  let moonPhaseDescription

  if (moon_phase === 0.5) {
    moonPhaseImage = fullMoon
    moonPhaseDescription = "Full Moon"
  } else if (moon_phase === 1 || moon_phase === 0) {
    moonPhaseImage = fullMoon
    moonPhaseDescription = "New Moon"
    moonPhaseImageClasses = 'w-28 rounded-full opacity-20'
  } else if (moon_phase === 0.25) {
    moonPhaseImage = firstQuarterMoon
    moonPhaseDescription = "First Quarter Moon"
  } else if (moon_phase === 0.75) {
    moonPhaseImage = thirdQuarterMoon
    moonPhaseDescription = "Third Quarter Moon"
  } else if (moon_phase > 0 && moon_phase < 0.25) {
    moonPhaseImage = waxingCrescent
    moonPhaseDescription = "Waxing Crescent"
  } else if (moon_phase > 0.75 && moon_phase < 1) {
    moonPhaseImage = waningCrescent
    moonPhaseDescription = "Waning Crescent"
  } else if (moon_phase > 0.25 && moon_phase < 5) {
    moonPhaseImage = waxingGibbous
    moonPhaseDescription = "Waxing Gibbous"
  } else if (moon_phase > 0.5 && moon_phase < 0.75) {
    moonPhaseImage = waningGibbous
    moonPhaseDescription = "Waning Gibbous"
  }

  return (
    <div className="w-48 h-56 bg-zinc-800 rounded-3xl flex flex-col justify-start items-start">
      <div className="flex justify-start items-center border-b border-gray-600 px-10 gap-2 ml-3">
        <i className="fa-solid fa-moon text-gray-600 text-xs mt-1"></i>
        <p className="text-gray-600 text-xs mt-1 py-1">Moon Phases</p>
      </div>
      <div className='flex flex-col justify-center items-center ml-10 mt-3'>
        <img src={moonPhaseImage} alt={moonPhaseDescription} className={moonPhaseImageClasses} />
        <p className='text-white text-xs mt-3'>{moonPhaseDescription}</p>
      </div>
      <div className='flex items-center justify-around mt-3 w-full'>
        <div className='flex items-center justify-start text-xs text-white '>
          <i className="fa-solid fa-arrow-up text-gray-600"></i>
          <b className='text-xs ml-1'>{formatToLocalTime(moonrise, timezone, "hh:mm a")}</b>
        </div>
        <div className='flex items-center justify-start text-xs text-white'>
          <i className="fa-solid fa-arrow-down text-gray-600"></i>
          <b className='text-xs ml-1'>{formatToLocalTime(moonset, timezone, "hh:mm a")}</b>
        </div>
      </div>
    </div>
  )
}