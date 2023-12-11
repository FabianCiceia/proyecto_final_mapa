

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
  console.log('descripcion: ', descripcion)
  console.log('Número de Piezas:', nroPiezas);
  console.log('Precio Mensual:', precioMensual);
  console.log('Depósito de Garantía:', depositoGarantia);
  console.log('Número de Contacto:', nroContacto);
  console.log('Latitud:', latitud);
  console.log('Longitud:', longitud);
  
  var nuevoAlquiler =  {nombre:`${nombre}`, descripcion: `${descripcion}`, nroPiezas: `${nroPiezas}`, precioMensual:`${precioMensual}`,depositoGarantia: `${depositoGarantia}`,nroContacto: `${nroContacto}`,latitud:`${latitud}`,longitud:`${longitud}` };
  datosAlquileres.push(nuevoAlquiler);
  errorEnvio.innerHTML = `Se han cargado los datos correctamente`;
  errorEnvio.classList.add('correcto');
  errorEnvio.classList.remove('error');
  console.log( 'Cantidad de datos: '+datosAlquileres.length);
  


  
}

form.addEventListener('submit', subirDatos);


