const form = document.getElementById('formLogin');
const correo = document.getElementById('correo');
const password = document.getElementById('password');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioEncontrado = usuarios.find(function(usuario){
        return usuario.correo === correo.value.trim() && usuario.password === password.value;
    });
    if(usuarioEncontrado){
        localStorage.setItem(
            'usuarioActivo',
            JSON.stringify(usuarioEncontrado)
        );

        window.location.href = 'inicio.html';
    } else{
        alert('correo o contraseña incorrectos');
    }
});