const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

const weatherStates = {
  rain: '&#x1F327;',
  clouds: '&#x2601;',
  clear: '&#x2600;'
}

const search = document.querySelector('#iCity')
const submit = document.querySelector('#submit')
const warning = document.querySelector('#warning')
const weatherState = document.querySelector('#weatherState')
const city = document.querySelector('#cityName')
const date = document.querySelector('#date')
const temp = document.querySelector('#temp')
const weather = document.querySelector('#weather')
const tempRange = document.querySelector('#tempRange')

const api = {
  key: 'd33bc25c7348bd89943f86b60be901a6',
  base: 'https://api.openweathermap.org/data/2.5/weather?q='
}

submit.addEventListener('click', getWeather)

function getWeather(event) {
  event.preventDefault()
  let cityName = search.value
  fetch(`${api.base}${cityName}&units=metric&appid=${api.key}`)
    .then(response => response.json())
    .then(response => setData(response))
    .catch(err => {
      warning.style.display = 'block'
    })
  console.log(cityName)
}

function setData(response) {
  const fullDate = new Date()
  const dados = response
  warning.style.display = 'none'

  date.innerHTML = `${weekDays[fullDate.getDay()]}, ${fullDate.getDate()} ${
    monthNames[fullDate.getMonth()]
  } ${fullDate.getFullYear()}`

  city.innerHTML = `${dados.name}, ${dados.sys.country}`
  temp.innerHTML = `Temp: ${Math.floor(dados.main.temp)}C`

  if (dados.weather[0].main == 'Rain') {
    weatherState.innerHTML = weatherStates.rain
  } else if (dados.weather[0].main == 'Clouds') {
    weatherState.innerHTML = weatherStates.clouds
  } else {
    weatherState.innerHTML = weatherStates.clear
  }

  weather.innerHTML = `Weather: ${dados.weather[0].main}`
  tempRange.innerHTML = `Temp Range: ${Math.floor(
    dados.main.temp_min
  )}C / ${Math.floor(dados.main.temp_max)}C`
}
