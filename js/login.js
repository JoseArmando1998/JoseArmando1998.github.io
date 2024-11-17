const LoginForm = document.querySelector('#LoginForm')
LoginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const gmail = document.querySelector('#gmail').value
    const contrasena = document.querySelector('#contrasena').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(nombre => nombre.gmail === gmail && nombre.contrasena === contrasena)
    if(!validUser){
        return alert('Usuarion y/o ciontraseña inorrectos!')
    }
    window.location.href = 'index.html';
})