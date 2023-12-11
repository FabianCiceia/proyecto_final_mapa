// Obtener referencias a los elementos del formulario
var form = document.getElementById('alquilerForm');
var nroPiezasInput = document.getElementById('nroPiezas');
var precioMensualInput = document.getElementById('precioMensual');
var depositoGarantiaInput = document.getElementById('depositoGarantia');
var nroContactoInput = document.getElementById('nroContacto');
var errorEnvio = document.getElementById('errorEnvio');

function subirDatos(event) {
  event.preventDefault(); 

 
  var nroPiezas = nroPiezasInput.value;
  var precioMensual = precioMensualInput.value;
  var depositoGarantia = depositoGarantiaInput.value;
  var nroContacto = nroContactoInput.value;
  
  if ((longitud == undefined) && latitud == undefined){
    console.log("No se cargo cordenada");
    errorEnvio.innerHTML = `Ingrese las coordenadas`;
    errorEnvio.classList.add('error');
    errorEnvio.classList.remove('correcto');
    return;
  }
  console.log('Número de Piezas:', nroPiezas);
  console.log('Precio Mensual:', precioMensual);
  console.log('Depósito de Garantía:', depositoGarantia);
  console.log('Número de Contacto:', nroContacto);
  console.log('Latitud:', latitud);
  console.log('Longitud:', longitud);
  /*Al cargar los datos a la base de datos hacer*/
  errorEnvio.innerHTML = `Se han cargado los datos correctamente`;
  errorEnvio.classList.add('correcto');
  errorEnvio.classList.remove('error');
}

form.addEventListener('submit', subirDatos);
