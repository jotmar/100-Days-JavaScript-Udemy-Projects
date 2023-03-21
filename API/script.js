const getLocation = document.querySelector('#getLocation')
const userLocation = document.querySelector('#location')

function showPosition(position) {
  userLocation.innerHTML = `Latitude: ${position.coords.latitude} <br>
  Longitude: ${position.coords.longitude}
  `
}

getLocation.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(showPosition)
})
