const getUsersButton = document.querySelector('#getUsers')
const userArea = document.querySelector('#userArea')

getUsersButton.addEventListener('click', getUsers)

function getUsers() {
  const http = new XMLHttpRequest()
  http.open('GET', 'users.json', true)
  http.send()
  http.onload = function () {
    if (this.status === 200) {
      //console.log(this.status)
      //console.log(this.responseText)
      const users = JSON.parse(this.responseText)
      var output = ''
      users.forEach(function (user) {
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
    }
    userArea.innerHTML = output
    console.log(this.status)
  }
}
