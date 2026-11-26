const bienvenida = document.getElementById('bienvenida');
const cerrarSesion = document.getElementById('cerrarSesion');

const usuario = JSON.parse(
    localStorage.getItem('usuarioActivo')
);

if(!usuario){
    window.location.href = 'login.html';
} else{
    bienvenida.textContent = usuario.nombre;
}

cerrarSesion.addEventListener('click', function(){
    localStorage.removeItem('usuarioActivo');
    window.location.href = 'index.html';
});



// Formulario personalizado

let formulario = document.querySelector(".formulario");
let mensaje = document.querySelector(".mensaje");
let cuerpoTabla = document.querySelector(".cuerpoTabla");

// Traer lo que ya esta guardado, o una lista vacia
let registros = JSON.parse(localStorage.getItem("registros")) || [];

// Mostrar los datos en la tabla
function mostrarRegistros() {
  cuerpoTabla.innerHTML = "";

  for (let registro of registros) {
    let fila = document.createElement("tr");

    for (let campo in registro) {
      let celda = document.createElement("td");
      celda.textContent = registro[campo];
      fila.appendChild(celda);
    }

    cuerpoTabla.appendChild(fila);
  }
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  let datos = new FormData(formulario);
  let registro = {};

  // Validar que no haya campos vacios
  for (let [campo, valor] of datos) {
    if (valor.trim() === "") {
      mensaje.textContent = "Todos los campos son obligatorios";
      return;
    }
    registro[campo] = valor.trim();
  }

  // toLocaleString: pone puntos de miles y la fecha con hora
  registro.matricula = Number(registro.matricula).toLocaleString("es-CO");
  registro.fechaRegistro = new Date().toLocaleString("es-CO");

  // Guardar en localStorage
  registros.push(registro);
  localStorage.setItem("registros", JSON.stringify(registros));

  mensaje.textContent = "Registro guardado correctamente";
  formulario.reset();
  mostrarRegistros();
});

mostrarRegistros();