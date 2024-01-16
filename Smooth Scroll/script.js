const links = document.querySelectorAll('.nav')

for (let link of links) {
  link.addEventListener('click', smoothScroll)
  console.log(link)
}

function smoothScroll(e) {
  e.preventDefault()
  const href = Number(this.getAttribute('number'))
  document.querySelectorAll('.content')[href - 1].scrollIntoView({
    behavior: 'smooth'
  })
}
