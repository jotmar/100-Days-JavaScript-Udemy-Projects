const modal = document.querySelector('.modal')
const showButton = document.querySelector('.show')
const closeButton = document.querySelector('.close')

function show() {
  modal.style.display = 'flex'
}

function close() {
  modal.style.display = 'none'
}

showButton.addEventListener('click', show)
closeButton.addEventListener('click', close)
