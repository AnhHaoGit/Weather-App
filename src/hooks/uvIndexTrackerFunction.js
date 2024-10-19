export default function uvIndexTrackerFunction(value) {
  const dot = document.getElementById('tracker__dot')
  if (value > 11) {
    dot.style.bottom = "105px"
  } else {
    const trackerLength = (value / 11) * 105
    dot.style.bottom = `${trackerLength}px`
  }
}