var marker;
map.on('click', function(e) {
  if (marker) {
    map.removeLayer(marker); // Eliminar marcador existente si hay uno
  }

  marker = L.marker(e.latlng).addTo(map); // Agregar un nuevo marcador
  var lat = e.latlng.lat;
  var lng = e.latlng.lng;

  console.log("[" + lat + "," + lng + "]"); // Mostrar en consola

  // Aquí puedes enviar estas variables (lat y lng) a tu servidor o realizar otras acciones con ellas
});