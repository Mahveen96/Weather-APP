const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e2a1dfcd1amsh197893fafcc658dp10c916jsn2e4dc24849b1',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
  },
}

const getWeather = (city) => {
  cityName.innerText = city
  fetch(
    'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      cloud_pct.innerText = response.cloud_pct
      feels_like.innerText = response.feels_like
      humidity.innerText = response.humidity
      humidity1.innerText = response.humidity
      max_temp.innerText = response.max_temp
      min_temp.innerText = response.min_temp
      sunrise.innerText = response.sunrise
      sunset.innerText = response.sunset
      temp.innerText = response.temp
      temp1.innerText = response.temp
      wind_degrees.innerText = response.wind_degrees
      wind_speed.innerText = response.wind_speed
      wind_speed1.innerText = response.wind_speed
      console.log(response)
    })
    .catch((err) => console.error(err))
}

submit.addEventListener('click', (e) => {
  e.preventDefault()
  getWeather(city.value)
})

getWeather('Hyderabad')
