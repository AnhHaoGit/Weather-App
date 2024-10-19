export default function sunriseSunsetCurrentTime(currentTime) {
  const deg = currentTime / 1440 * 360 + 180
  const arrow = document.getElementById('time_arrow')
  arrow.style.transform = `rotate(${deg}deg)`
}