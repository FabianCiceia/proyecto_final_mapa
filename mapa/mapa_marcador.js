/*
var alquileres = L.marker([-27.30291, -55.96566])
.addTo(map)
.bindPopup("<b>Te Papa</b><br>Museum of New Zealand.")
.openPopup();
*/


var iconoEdificio = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1259/1259805.png', // Ruta de tu icono personalizado
  iconSize: [38, 38], // Tamaño del icono
  iconAnchor: [19, 38], // Punto de anclaje del icono
  popupAnchor: [0, -38] // Punto donde se abre el popup
});

var alquileres = {};

function departamento(nombre, descripcion, nroPiezas, precioMensual,depositoGarantia,nroContacto,latitud,longitud ) {
  alquileres[nombre] = L.marker([latitud,longitud], { icon: iconoEdificio })
    .addTo(map)
    .bindPopup('<div>'+
    '<h2> Casa ' + nombre + '</h2>' +
    '<p>' + descripcion + '</p>' +
    '<p>' + "Con "+ nroPiezas + " piezas" + '</p>' +
    '<p>' +"Con un precio mensual de "+ precioMensual +" Gs."+ '</p>' +
    '<p>' +" y un deposito inicial de " +depositoGarantia + " Gs." + '</p>' +
  '</div>')
    .openPopup();
}


console.log( 'Cantidad de datos: '+datosAlquileres.length);
for(var i = 0; i < datosAlquileres.length;i++ ){
  
  var alquilerActual = datosAlquileres[i];
  departamento(alquilerActual.nombre, alquilerActual.descripcion, alquilerActual.nroPiezas, alquilerActual.precioMensual,alquilerActual.depositoGarantia,alquilerActual.nroContacto,alquilerActual.latitud,alquilerActual.longitud )
  console.log(alquilerActual.nombre)
}