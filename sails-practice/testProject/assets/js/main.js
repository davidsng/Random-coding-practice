(function () {
  var userList = document.querySelector('#userList')

  io.socket.get('/user', res => {
    res.forEach(user => {
      const userEl = document.createElement('li')
      userEl.textcontent = user.name
      userList.appendChild(userEl)
    })
  })

  io.socket.on('user', change => {
    switch (change.verb) {
      case 'created' :

        break;
      case 'deleted':

      break;
    }
  })
})
