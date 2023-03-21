const getUsersButton = document.querySelector('#getUsers')
const userArea = document.querySelector('#userArea')

getUsersButton.addEventListener('click', getUsers)

function getUsers() {
  var output = ''
  fetch('users.json')
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      data.forEach(function (user) {
        output += `
          <ul>
            <ol>ID: ${user.id}</ol>
            <ol>NAME: ${user.name}</ol>
            <ol>AGE: ${user.age}</ol>
            <ol>EMAIL: ${user.email}</ol>
          </ul>
          <hr>
        `
      })
      userArea.innerHTML = output
    })
}
