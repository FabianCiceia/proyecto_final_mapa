
// Coordenadas para el terreno A
var terrenoA = [
    [-27.302722673431127,-55.96626520156861],
    [-27.3027846417798,-55.96605062484742],
    [-27.30318, -55.96625],
    [-27.30312, -55.96644],
  ];
  
  // Coordenadas para el terreno B
  var terrenoB = [
    [-27.3027846417798,-55.96605062484742],
    [-27.302846610093884,-55.96583604812623],
    [-27.30325, -55.96603],
    [-27.30318, -55.96625],
  ];
  
  // Coordenadas para el terreno C
  var terrenoC = [
    [-27.302846610093884,-55.96583604812623],
    [-27.30291, -55.96566],
    [-27.303337588590125,-55.96580386161805],
    [-27.30325, -55.96603],
  ];
  
  // Coordenadas para el terreno D
  var terrenoD = [
    [-27.30291, -55.96566],
    [-27.30298961376355,-55.965417623519905],
    [-27.303411157201676,-55.96560110698701],
    [-27.303337588590125,-55.96580386161805],
  ];
  
  var terrenos = [terrenoA, terrenoB, terrenoC, terrenoD];
  var areas = [1,2,3,4];
  
  
  function mostrarPoligono(map, coords, area) {
    var polygon = L.polygon(coords, { color: 'red' }).addTo(map);
    polygon.bindPopup("El área del polígono es aproximadamente: " + area + " metros cuadrados");
  }
  
  
  for (var i = 0; i < terrenos.length; i++) {
    mostrarPoligono(map, terrenos[i], areas[i]);
  }
  