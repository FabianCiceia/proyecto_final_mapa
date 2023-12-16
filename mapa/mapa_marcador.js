

var iconoEdificio = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1259/1259805.png',
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38]
});

var alquileres = {};

function departamento(nombre, descripcion, nroPiezas, precioMensual, depositoGarantia, nroContacto, latitud, longitud, imagen) {
  var marker = L.marker([latitud, longitud], { icon: iconoEdificio }).addTo(map);

  alquileres[nombre] = marker;
  marker.on('click', function () {
    document.getElementById('infoNombre').innerText = 'Casa ' + nombre;
    document.getElementById('infoDatos').innerText = descripcion +
      '\n\nCon '  + nroPiezas + ' piezas' +
      '\nPrecio mensual: ' + precioMensual + ' Gs.' +
      '\nDepósito inicial: ' + depositoGarantia + ' Gs.' +
      '\n\nNumero de contacto: ' + nroContacto;
    let fondo = document.getElementById('info');
    fondo.style.backgroundImage  = `url(${imagen})`;
  });
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
    newSize = [25, 25]; 
  } else {
 
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


for(let i = 0; i < datosAlquileres.length;i++ ){
  
  var alquilerActual = datosAlquileres[i];
  departamento(alquilerActual.nombre,alquilerActual.descripcion,alquilerActual.nroPiezas,alquilerActual.precioMensual,alquilerActual.depositoGarantia,alquilerActual.nroContacto,alquilerActual.latitud,alquilerActual.longitud, alquilerActual.imagen)
  console.log(alquilerActual.imagen)
}
