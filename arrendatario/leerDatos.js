

// Obtener referencias a los elementos del formulario
var form = document.getElementById('alquilerForm');
var nombreInput = document.getElementById('nombre');
var descripcionInput = document.getElementById('descripcion');
var nroPiezasInput = document.getElementById('nroPiezas');
var precioMensualInput = document.getElementById('precioMensual');
var depositoGarantiaInput = document.getElementById('depositoGarantia');
var nroContactoInput = document.getElementById('nroContacto');
var errorEnvio = document.getElementById('errorEnvio');

var descripcion;
var nombre;
var nroPiezas;
var precioMensual;
var depositoGarantia;
var nroContacto;

form.addEventListener('submit', subirDatos);
function subirDatos(event) {
  event.preventDefault(); 
    descripcion = descripcionInput.value
    nombre = nombreInput.value;
    nroPiezas = nroPiezasInput.value;
    precioMensual = precioMensualInput.value;
    depositoGarantia = depositoGarantiaInput.value;
    nroContacto = nroContactoInput.value;
  
  if ((longitud == undefined) && latitud == undefined){
    console.log("No se cargo cordenada");
    errorEnvio.innerHTML = `Ingrese las coordenadas`;
    errorEnvio.classList.add('error');
    errorEnvio.classList.remove('correcto');
    return;
  }

  datosAlquileres = JSON.parse(localStorage.getItem('datosAlquileres'));
  var nuevoAlquiler =  {nombre:`${nombre}`, descripcion: `${descripcion}`, nroPiezas: `${nroPiezas}`, precioMensual:`${precioMensual}`,depositoGarantia: `${depositoGarantia}`,nroContacto: `${nroContacto}`,latitud:`${latitud}`,longitud:`${longitud}` };
  datosAlquileres.push(nuevoAlquiler);
  localStorage.setItem('datosAlquileres', JSON.stringify(datosAlquileres));
  errorEnvio.innerHTML = `Se han cargado los datos correctamente`;
  
  errorEnvio.classList.add('correcto');
  errorEnvio.classList.remove('error');
  console.log(datosAlquileres);
  


  
}



