function newColor() {
  let c = Math.random().toString(16).substring(2, 8)
  return '#' + c
}
const hexColor = document.querySelector('.hexColor')
const color = document.querySelector('.color')

hexColor.addEventListener('click', e => {
  color.innerHTML = newColor()
  document.body.style.backgroundColor = color.innerHTML
})
