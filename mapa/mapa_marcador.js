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






var datosAlquileres = 
[
    {
        "nombre": "Edificio Newton",
        "descripcion": "Un apartamento con politica sin mascotas y con estacionamiento.",
        "nroPiezas": "1",
        "precioMensual": "500000",
        "depositoGarantia": "250000",
        "nroContacto": "0981625487",
        "latitud": "-27.30862857824979",
        "longitud": "-55.88903903961182"
    },
    {
        "nombre": "El azul",
        "descripcion": "con politica, luz y agua incluido en el alquiler",
        "nroPiezas": "1",
        "precioMensual": "800000",
        "depositoGarantia": "1000000",
        "nroContacto": "0981541234",
        "latitud": "-27.307956493549586",
        "longitud": "-55.8876657485962"
    },
    {
        "nombre": "San juan",
        "descripcion": " agua incluido en el alquiler",
        "nroPiezas": "2",
        "precioMensual": "800000",
        "depositoGarantia": "1000000",
        "nroContacto": "0981541542",
        "latitud": "-27.30881923983492",
        "longitud": "-55.887789130210884"
    },
    {
        "nombre": "Edificio San Miguel II",
        "descripcion": "Un apartamento con politica sin mascotas",
        "nroPiezas": "1",
        "precioMensual": "850000",
        "depositoGarantia": "500000",
        "nroContacto": "0981658985",
        "latitud": "-27.308275853453686",
        "longitud": "-55.88714003562928"
    },
    {
        "nombre": "Edificio L",
        "descripcion": "Un apartamento con politica sin mascotas",
        "nroPiezas": "2",
        "precioMensual": "850000",
        "depositoGarantia": "500000",
        "nroContacto": "0981658658",
        "latitud": "-27.303938200107797",
        "longitud": "-55.88535904884339"
    },
    {
        "nombre": "Residencial Arminio",
        "descripcion": "Un apartamento con politica sin mascotas",
        "nroPiezas": "4",
        "precioMensual": "2000000",
        "depositoGarantia": "1500000",
        "nroContacto": "098165862",
        "latitud": "-27.305272880732932",
        "longitud": "-55.89010655879975"
    },{
        "nombre": "Edificio XYZ",
        "descripcion": "Departamento cerca de parques",
        "nroPiezas": "3",
        "precioMensual": "950000",
        "depositoGarantia": "800000",
        "nroContacto": "0981654321",
        "latitud": "-27.30765234234125",
        "longitud": "-55.88923245678412"
    },
    {
        "nombre": "Residencial ABC",
        "descripcion": "Amplio departamento con vista panorámica",
        "nroPiezas": "2",
        "precioMensual": "750000",
        "depositoGarantia": "600000",
        "nroContacto": "0981654123",
        "latitud": "-27.30654123451234",
        "longitud": "-55.88812345678901"
    },
    {
        "nombre": "Residencial Sunset",
        "descripcion": "Moderno departamento con vista al atardecer",
        "nroPiezas": "3",
        "precioMensual": "1200000",
        "depositoGarantia": "1000000",
        "nroContacto": "0987654321",
        "latitud": "-27.306782",
        "longitud": "-55.888359"
    },
    {
        "nombre": "Edificio Green",
        "descripcion": "Departamento ecológico con paneles solares",
        "nroPiezas": "2",
        "precioMensual": "900000",
        "depositoGarantia": "800000",
        "nroContacto": "0987123456",
        "latitud": "-27.307983",
        "longitud": "-55.888422"
    },{
        "nombre": "Edificio A",
        "descripcion": "Departamento en zona céntrica",
        "nroPiezas": "2",
        "precioMensual": "900000",
        "depositoGarantia": "800000",
        "nroContacto": "0987123456",
        "latitud": "-27.307017474776146",
        "longitud": "-55.885750651359565"
    },
    {
        "nombre": "El Mirador",
        "descripcion": "Vista panorámica al río",
        "nroPiezas": "3",
        "precioMensual": "1200000",
        "depositoGarantia": "1000000",
        "nroContacto": "0987654321",
        "latitud": "-27.307432169325814",
        "longitud": "-55.885010361671455"
    },
    {
        "nombre": "Residencial Oasis",
        "descripcion": "Confortable departamento con áreas verdes",
        "nroPiezas": "2",
        "precioMensual": "950000",
        "depositoGarantia": "850000",
        "nroContacto": "0987987654",
        "latitud": "-27.307937427257592",
        "longitud": "-55.88520348072053"
    },
    {
        "nombre": "Edificio B",
        "descripcion": "Apartamento con servicios incluidos",
        "nroPiezas": "1",
        "precioMensual": "700000",
        "depositoGarantia": "600000",
        "nroContacto": "0987123456",
        "latitud": "-27.309891705147262",
        "longitud": "-55.88365316390992"
    },
    {
        "nombre": "El Palmar",
        "descripcion": "Zona tranquila y segura",
        "nroPiezas": "2",
        "precioMensual": "850000",
        "depositoGarantia": "750000",
        "nroContacto": "0987345678",
        "latitud": "-27.31131210991641",
        "longitud": "-55.884790420532234"
    },
    {
        "nombre": "Edificio C",
        "descripcion": "Cerca de parques y comercios",
        "nroPiezas": "3",
        "precioMensual": "1100000",
        "depositoGarantia": "1000000",
        "nroContacto": "0987456123",
        "latitud": "-27.310673406666023",
        "longitud": "-55.88583648204804"
    },
    {
        "nombre": "Residencial Plaza",
        "descripcion": "Apartamento moderno con amenities",
        "nroPiezas": "1",
        "precioMensual": "750000",
        "depositoGarantia": "700000",
        "nroContacto": "0987987654",
        "latitud": "-27.308190055360797",
        "longitud": "-55.88356733322144"
    },
    {
        "nombre": "Edificio D",
        "descripcion": "Cerca de transporte público",
        "nroPiezas": "2",
        "precioMensual": "800000",
        "depositoGarantia": "700000",
        "nroContacto": "0987123456",
        "latitud": "-27.30670764450352",
        "longitud": "-55.88419497013093"
    }
];
for(var i = 0; i < datosAlquileres.length;i++ ){
  
  var alquilerActual = datosAlquileres[i];
  departamento(alquilerActual.nombre, alquilerActual.descripcion, alquilerActual.nroPiezas, alquilerActual.precioMensual,alquilerActual.depositoGarantia,alquilerActual.nroContacto,alquilerActual.latitud,alquilerActual.longitud )
  console.log(alquilerActual.nombre)
}
