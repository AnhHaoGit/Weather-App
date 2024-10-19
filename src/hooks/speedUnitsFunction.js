export default function speedUnitsFunction(units) {
  let speed_unit
  if (units === "metric") {
    speed_unit = "m/s"
  } else if (units === "imperial") {
    speed_unit = "mph"
  }

  return speed_unit
}