/*
var alquileres = L.marker([-27.30291, -55.96566])
.addTo(map)
.bindPopup("<b>Te Papa</b><br>Museum of New Zealand.")
.openPopup();
*/


var iconoEdificio = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1259/1259805.png',
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38]
});

var alquileres = {};

function departamento(nombre, descripcion, nroPiezas, precioMensual, depositoGarantia, nroContacto, latitud, longitud) {
  var marker = L.marker([latitud, longitud], { icon: iconoEdificio }).addTo(map);

  marker.bindPopup('<div>' +
    '<h2> Casa ' + nombre + '</h2>' +
    '<p>' + descripcion + '</p>' +
    '<p>' + "Con " + nroPiezas + " piezas" + '</p>' +
    '<p>' + "Con un precio mensual de " + precioMensual + " Gs." + '</p>' +
    '<p>' + " y un deposito inicial de " + depositoGarantia + " Gs." + '</p>' +
    '</div>').openPopup();

  alquileres[nombre] = marker;
}

map.on('zoomend', function () {
  var currentZoom = map.getZoom();

  // Ajusta el tamaño del icono en función del nivel de zoom
  var newSize = [30, 30]; // Tamaño inicial
  console.log(currentZoom);
  if (currentZoom > 17) {
    newSize = [40, 40]; 
  } else if (currentZoom > 16) {
    newSize = [30, 30]; 
  } else if(currentZoom > 11){
    newSize = [20, 20]; 
  }else {
    newSize = [10, 10];
  }

  // Itera sobre los marcadores y actualiza el tamaño del icono
  Object.values(alquileres).forEach(function (marker) {
    marker.setIcon(L.icon({
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/1259/1259805.png',
      iconSize: newSize,
      iconAnchor: [newSize[0] / 2, newSize[1]],
      popupAnchor: [0, -newSize[1]]
    }));
  });
});


var datosAlquileresStorage = JSON.parse(localStorage.getItem('datosAlquileres'));
for(var i = 0; i < datosAlquileresStorage.length;i++ ){
  
  var alquilerActual = datosAlquileresStorage[i];
  departamento(alquilerActual.nombre, alquilerActual.descripcion, alquilerActual.nroPiezas, alquilerActual.precioMensual,alquilerActual.depositoGarantia,alquilerActual.nroContacto,alquilerActual.latitud,alquilerActual.longitud )
  console.log(alquilerActual.nombre)
}