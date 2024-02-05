const links = document.querySelectorAll('.link')
const closeIcon = 'fas fa-times close'
const openIcon = 'fas fa-bars hamburger'
const icon = document.querySelector('#menuBtn')
const mobileWrapper = document.querySelector('.mobileWrapper')
let open = false

icon.addEventListener('click', toggleMenuBar)

for (let link of links) {
  link.addEventListener('click', toggleActive)
  link.addEventListener('click', smoothScroll)
}

function toggleActive() {
  for (let link of links) {
    link.classList.remove('activeL')
  }
  this.classList.toggle('activeL')
  icon.click()
}

function smoothScroll() {
  const el = document.querySelector(`#${this.getAttribute('href')}`)
  el.scrollIntoView({
    behavior: 'smooth'
  })
}

function toggleMenuBar() {
  if (!open) {
    open = true
    this.className = closeIcon
  } else {
    open = false
    this.className = openIcon
  }
  mobileWrapper.classList.toggle('active')
}
