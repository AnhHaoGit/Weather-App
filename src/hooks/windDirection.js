export default function windDirection(value) {
  const arrow = document.getElementById('arrow')
  if (value < 0) {
    return
  } else {
    arrow.style.transform = `rotate(${value}deg)`
  }
}
