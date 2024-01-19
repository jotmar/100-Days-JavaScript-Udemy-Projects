const links = document.querySelectorAll('.link')
const logo = document.querySelector('#logo')
const header = document.querySelector('header')

window.addEventListener('scroll', stickyHeader)
logo.addEventListener('click', scrollHome)

for (let link of links) {
  link.addEventListener('click', smoothScroll)
}

function smoothScroll(e) {
  e.preventDefault()
  href =
    document.querySelectorAll('.content')[Number(this.getAttribute('href') - 1)]
  href.scrollIntoView({
    behavior: 'smooth'
  })
}

function scrollHome(e) {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
}

function stickyHeader(e) {
  header.classList.toggle('sticky', window.scrollY > 0)
}
