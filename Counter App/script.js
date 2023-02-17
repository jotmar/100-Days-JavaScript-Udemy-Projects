const count = document.querySelector('.count')
// const add = document.querySelector('.add')
// const reset = document.querySelector('.reset')
// const sub = document.querySelector('.sub')
const buttons = document.querySelector('.buttons')

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = 'yellow'
  } else if (count.innerHTML < 0) {
    count.style.color = 'orangered'
  } else {
    count.style.color = 'white'
  }
}

buttons.addEventListener('click', e => {
  if (e.target.classList.contains('add')) {
    console.log('Added!')
    count.innerHTML++
  } else if (e.target.classList.contains('sub')) {
    console.log('Subtracted!')
    count.innerHTML--
  } else if (e.target.classList.contains('reset')) {
    console.log('Reseted')
    count.innerHTML = 0
  }
  setColor()
})
