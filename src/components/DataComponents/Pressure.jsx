import { useEffect } from "react"
import classes from "./Pressure.module.css"
import rotate from "../../hooks/rotateFunction"

export default function Pressure({ pressure }) {
  pressure = pressure / 1000
  let gaugeRotate = pressure / 5

  useEffect(() => {
    rotate(gaugeRotate)
  }, [gaugeRotate])
  return (
    <div className="w-48 h-[9rem] bg-zinc-800 rounded-3xl flex flex-col justify-start items-start">
      <div className="flex justify-start items-center border-b border-gray-600 px-12 gap-2 ml-3">
        <i className="fa-solid fa-gauge text-gray-600 text-xs mt-1"></i>
        <p className="text-gray-600 text-xs mt-1 py-1">Pressure</p>
      </div>
      <div className="flex flex-col justify-start items-start mt-4 ml-6">
        <div className={classes.gauge}>
          <div className={classes.gauge__body}>
            <div className={`${classes.gauge__fill}`} id="gauge__fill"></div>
            <div className={classes.gauge__cover}>
              <b>{pressure}</b>
              <p>hPa</p>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center mt-1 ">
          <p className="text-[10px] text-white">Low</p>
          <p className="text-[10px] text-white ml-[6.5rem]">High</p>
        </div>
      </div>
    </div>
  )
}