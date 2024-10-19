export default function temperatureUnitsFunction(units) {
  let temperature_unit
  if (units === "metric") {
    temperature_unit = "°C"
  } else if (units === "imperial") {
    temperature_unit = "°F"
  }

  return temperature_unit
}