let days = document.querySelector('#days')
let hours = document.querySelector('#hours')
let min = document.querySelector('#min')
let sec = document.querySelector('#sec')
const counterTimerDiv = document.querySelector('.counterTimer')

let time = 11 // In minutes
let counterTimer = time * 60

const startCounter = () => {
  const secInterval = setInterval(() => {
    console.log('time')
    counterTimer -= 1
    days.innerHTML = format(Math.floor(counterTimer / 86400))
    hours.innerHTML = format(Math.floor(counterTimer / 3600) % 60)
    min.innerHTML = format(Math.floor(counterTimer / 60) % 60)
    sec.innerHTML = format(Math.floor(counterTimer % 60))
    if (counterTimer <= 0) {
      clearInterval(secInterval)
      counterTimerDiv.innerHTML = 'Timer Has Ended!'
    }
  }, 1000)
}

const format = t => {
  return t < 10 ? `0${t}` : t
}

startCounter()
