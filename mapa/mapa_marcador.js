/*
var alquileres = L.marker([-27.30291, -55.96566])
.addTo(map)
.bindPopup("<b>Te Papa</b><br>Museum of New Zealand.")
.openPopup();
*/




var alquileres = {};

function departamento(id, ubicacion, titulo, descripcion, imagenURL) {
  alquileres[id] = L.marker(ubicacion, { icon: iconoEdificio })
    .addTo(map)
    .bindPopup('<div>'+
    '<h2> Casa ' + titulo + '</h2>' +
    '<p>' + descripcion + '</p>' +
    '<img class="imagen" src="' + imagenURL + '" alt="Imagen del terreno"> ' +
  '</div>')
    .openPopup();
}
function casa(id, ubicacion, titulo, descripcion, imagenURL) {
  alquileres[id] = L.marker(ubicacion, { icon: iconoCasa })
    .addTo(map)
    .bindPopup('<div>'+
    '<h2> Casa ' + titulo + '</h2>' +
    '<p>' + descripcion + '</p>' +
    '<img class="imagen" src="' + imagenURL + '" alt="Imagen del terreno"> ' +
  '</div>')
    .openPopup();
}

