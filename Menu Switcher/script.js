const links = document.querySelectorAll('.link')
const header = document.querySelector('header')
const logo = document.querySelector('#logo')
const topButton = document.querySelector('.topButton')

for (let link of links) {
  link.addEventListener('click', smoothScroll)
  link.addEventListener('click', activeL)
}
window.addEventListener('scroll', () => {
  headerScroll()
  if (window.scrollY > 100) {
    topButton.classList.add('topButtonActive')
  } else {
    topButton.classList.remove('topButtonActive')
  }
})
logo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  activeL()
})

topButton.addEventListener('click', topButtonUp)

function smoothScroll() {
  const href = document.querySelector(`#${this.getAttribute('href')}`)
  href.scrollIntoView({
    behavior: 'smooth'
  })
}

function headerScroll() {
  if (window.scrollY > 0) {
    header.classList.add('headerOut')
  } else {
    header.classList.remove('headerOut')
  }
}

function activeL() {
  try {
    for (let link of links) {
      link.classList.remove('activeL')
    }
    this.classList.add('activeL')
  } catch (error) {
    return
  }
}

function topButtonUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
