import { useEffect, useState } from "react"

//Get exact city from coordinates
function getCity(data) {
  return new Promise((resolve, reject) => {
    const lon = data.longitude
    const lat = data.latitude

    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        resolve(data.address.city)
      }).catch((error) => {
        reject(error)
      })
  })
}

// Get exact user's coordinates
function fetchCurrentPosition() {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const currentPosition = {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      }
      resolve(currentPosition)
    })
  })
}

//Fetch data
export function useFetch() {
  const [isFetching, setIsFetching] = useState(false)
  const [error1, setError1] = useState(null)
  const [city, setCity] = useState("")


  useEffect(() => {
    async function fetchData() {
      setIsFetching(true)
      try {
        const position = await fetchCurrentPosition()
        const city = await getCity(position)
        setCity(city)
      } catch (error) {
        setError1({ messaged: error.message || 'Failed to fetch data.' })
      }
      setIsFetching(false)
    }

    fetchData()
  }, [])

  return {
    isFetching,
    city,
    error1
  }
}