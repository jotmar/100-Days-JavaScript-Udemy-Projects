const dateExpected = '1 jan 2024'
const counterBox = document.querySelector('#counterBox')
const dateEnd = new Date(dateExpected)
const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')

const calcDate = setInterval(() => {
  const dateNow = new Date()
  const difference = (dateEnd - dateNow) / 1000
  console.log(difference)
  days.innerHTML = Math.floor(difference / 86400)
  hours.innerHTML = Math.floor(difference / 3600) % 60
  min.innerHTML = Math.floor(difference / 60) % 60
  sec.innerHTML = Math.floor(difference % 60)

  if (difference <= 0) {
    counterBox.innerHTML = 'Happy New Year!'
  }
}, 1000)
