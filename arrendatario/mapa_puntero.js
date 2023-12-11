
var latitud, longitud;

var marker;
map.on('click', function(e) {
  if (marker) {
    map.removeLayer(marker);
  }

  marker = L.marker(e.latlng).addTo(map);

  // Actualiza las variables globales con los valores de latitud y longitud
  latitud = e.latlng.lat;
  longitud = e.latlng.lng;

});
