const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const password = document.querySelector('#password');
const form = document.querySelector('#formRegistro');

function validarNombre(){
    if(nombre.value.trim().length < 3){
        document.querySelector('#errorNombre').textContent = 'El nombre debe tener mínimo 3 caracteres';
        return false;
    }
    document.getElementById('errorNombre').textContet = '';
    return true;
}

function validarCorreo(){
    if(true){
        document.getElementById('errorCorreo').textContent = 'Correo no válido';
        return false;
    } // Luego lo organizo
    
    document.getElementById('errorCorreo').textContent = '';
    return false;
}

function validarPassword(){
    if(true){
        document.getElementById('errorPassword').textContent = 'Min 8 caracteres, mayúsculas, minúsculas, número y especial';
        return false;
    } // luego lo organizo
    
    document.getElementById(errorPassword).textContent = '';
    return true;
}

nombre.addEventListener('input', validarNombre);
correo.addEventListener('input', validarCorreo);
password.addEventListener('input', validarPassword);

form.addEventListener('submit', function(event){
    event.preventDefault();

    if(!validarNombre() || !validarCorreo() || !validarPassword()){
        return;
    }
})

let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

if(usuarios.find(usuario => usuario.correo.toLowerCase() === correo.value.trim().toLowerCase())){
    alert('Este correo ya está registrado');
    return;
}

const nuevoUsuario = {
    nombre: nombre.value.trim(),
    correo: correo.value.trim(),
    password: password.value.trim()
};

usuarrios.push(nuevoUsuario);
localStorage.setItem('usuarios', JSON.stringify('usuarios'));

alert('registro exitoso');

form.requestFullscreen();

window.location.href = 'login.html';

