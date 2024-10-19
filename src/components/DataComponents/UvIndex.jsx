import classes from "./UvIndex.module.css"
import uvIndexTrackerFunction from "../../hooks/uvIndexTrackerFunction"
import { useEffect } from "react"
export default function UvIndex({uvIndex}) {
  let info
  uvIndex = Math.round(uvIndex)
  
  if (uvIndex >=10) {
    info = <b className='text-teal-400 text-5xl'>{uvIndex}</b>
  } else {
    info = <b className='text-teal-400 text-6xl'>{uvIndex}</b>
  }

  let scale
  let description
  let descriptionMarginTop
  if (uvIndex >= 0 && uvIndex <= 2) {
    scale = "Low"
    description = "No protection needed."
    descriptionMarginTop="4"
  } else if (uvIndex > 2 && uvIndex <= 5) {
    scale = "Moderate"
    description = "Protection needed. Wear protective clothing."
    descriptionMarginTop="3"
  } else if (uvIndex > 5 && uvIndex <= 7) {
    scale = "High"
    description = "Protection needed. Wear protective clothing."
    descriptionMarginTop="3"
  } else if (uvIndex > 7 && uvIndex <= 10) {
    scale = "Very High"
    description = "Extra protection needed. Wear protective clothing."
    descriptionMarginTop="3"
  } else {
    scale = "Extreme"
    description = "Extra protection needed. Wear protective clothing."
    descriptionMarginTop="3"
  }

  useEffect(() => {
    uvIndexTrackerFunction(uvIndex)
  }, [uvIndex])
  return (
    <div className="w-48 h-52 bg-zinc-800 rounded-3xl flex flex-col justify-start items-start">
      <div className="flex justify-start items-center border-b border-gray-600 px-12 gap-1 ml-3">
        <i className="fa-solid fa-sun text-gray-600 text-xs mt-1"></i>
        <p className="text-gray-600 text-xs mt-1 py-1 ml-1">UV index</p>
      </div>
      <div className="flex justify-start items-center mt-4 ml-10">
        <div className={classes.tracker}>
          <div className="h-2 w-2 rounded-full bg-white flex justify-center items-center absolute" id="tracker__dot"><div className="h-1 w-1 bg-black rounded-full"></div></div>
        </div>
        <div className="flex flex-col justify-start items-center ml-14">
          {info}
          <p className='text-white text-xs mt-2'>{scale}</p>
        </div>
      </div>
      <p className={`text-white text-xs mt-${descriptionMarginTop} ml-5`}>{description}</p>
    </div>
  )
}