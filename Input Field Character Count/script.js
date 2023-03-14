const counter = document.querySelector('#counter')
const inputArea = document.querySelector('#inputArea')

inputArea.addEventListener('input', () => {
  counter.innerText = inputArea.value.length
})
