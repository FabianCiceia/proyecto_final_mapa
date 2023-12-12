

var iconoCasa = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/609/609803.png', // Ruta de tu icono personalizado
    iconSize: [38, 38], // Tamaño del icono
    iconAnchor: [19, 38], // Punto de anclaje del icono
    popupAnchor: [0, -38] // Punto donde se abre el popup
  });



// Función para controlar la visibilidad de los marcadores según el nivel de zoom
function controlarVisibilidadMarcadores() {
    var zoomActual = map.getZoom();
    for (var id in alquileres) {
      if (zoomActual < 15) { // Cambia 10 por el nivel de zoom a partir del cual deseas ocultar los marcadores
        map.removeLayer(alquileres[id]);
      } else {
        if (!map.hasLayer(alquileres[id])) {
          map.addLayer(alquileres[id]);
        }
      }
    }
  }
  
  // Evento que controla la visibilidad de los marcadores al cambiar el nivel de zoom
  map.on('zoomend', controlarVisibilidadMarcadores);