const random = document.querySelector('.random')
const count = document.querySelector('.count')

random.addEventListener('click', e => {
  count.innerHTML = Math.floor(Math.random() * 10 + 1)
})
