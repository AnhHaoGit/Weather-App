export default function sunriseSunsetFunction(sunriseDuration, sunriseInMinute) {
  const clock = document.getElementById('clock')
  const sunriseDurationDeg = sunriseDuration / 1440 * 360
  const sunriseDeg = sunriseInMinute / 1440 * 360 + 180

  clock.style.background = `conic-gradient(
    #355c7d 0deg, 
    #6c5b7b ${sunriseDurationDeg / 30}deg, 
    #c06c84 ${2 * sunriseDurationDeg / 30}deg, 
    #f8b195 ${3 * sunriseDurationDeg / 30}deg,
    #f8b195 ${sunriseDurationDeg - sunriseDurationDeg / 30}deg,
    #c06c84 ${sunriseDurationDeg}deg,
    #6c5b7b ${sunriseDurationDeg + sunriseDurationDeg / 30}deg, 
    #355c7d ${sunriseDurationDeg + 2 * sunriseDurationDeg / 30}deg
    )`
  clock.style.transform = `rotate(${sunriseDeg}deg)`

  const clock_container = document.getElementById('clock_container')
  clock_container.style.backgound = "none"
  clock_container.style.transform = "rotate(0deg)"
}