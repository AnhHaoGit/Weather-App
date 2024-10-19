export default function rotate(value) {
  const gaugeFill = document.getElementById('gauge__fill')
  if (value < 0) {
    return
  } else if (value > 0.5) {
    console.log(value)
    gaugeFill.style.transform = `rotate(0.5turn)`
  } else {
    gaugeFill.style.transform = `rotate(${value}turn)`
  }
}
