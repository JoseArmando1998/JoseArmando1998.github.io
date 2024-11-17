const RegisForm = document.querySelector('#RegisForm')
RegisForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const nombre = document.querySelector('#nombre').value
    const contrasena = document.querySelector('#contrasena').value
    const gmail = document.querySelector('#gmail').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUsersRegistred = Users.find(nombre => nombre.gmail === gmail)
    if (isUsersRegistred) {
        return alert('El usuario ya esta registrado')
    }

    Users.push({nombre: nombre, contrasena: contrasena, gmail: gmail})
    localStorage.setItem('users', JSON.stringify(Users))
    window.location.href='login.html'

})