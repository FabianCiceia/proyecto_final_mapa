

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

var datosAlquileres = 
[
    {
        "id":"0",
        "nombre": "Edificio Newton",
        "imagen":"https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg",
        "descripcion": "Un apartamento con politica sin mascotas y con estacionamiento.",
        "nroPiezas": "1",
        "precioMensual": "500000",
        "depositoGarantia": "250000",
        "nroContacto": "0981625487",
        "latitud": "-27.30862857824979",
        "longitud": "-55.88903903961182"
    },
    {
        "id":"1",
        "nombre": "El azul",
        "imagen":"https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg",
        "descripcion": "con politica, luz y agua incluido en el alquiler",
        "nroPiezas": "1",
        "precioMensual": "800000",
        "depositoGarantia": "1000000",
        "nroContacto": "0981541234",
        "latitud": "-27.307956493549586",
        "longitud": "-55.8876657485962"
    },
    {
        "id":"2",
        "nombre": "San juan",
        "imagen":"https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg",
        "descripcion": " agua incluido en el alquiler",
        "nroPiezas": "2",
        "precioMensual": "800000",
        "depositoGarantia": "1000000",
        "nroContacto": "0981541542",
        "latitud": "-27.30881923983492",
        "longitud": "-55.887789130210884"
    },
    {
        "id":"3",
        "nombre": "Edificio San Miguel II",
        "imagen":"https://cdn.pixabay.com/photo/2016/09/19/17/20/home-1680800_1280.jpg",
        "descripcion": "Un apartamento con politica sin mascotas",
        "nroPiezas": "1",
        "precioMensual": "850000",
        "depositoGarantia": "500000",
        "nroContacto": "0981658985",
        "latitud": "-27.308275853453686",
        "longitud": "-55.88714003562928"
    },
    {
        "id":"4",
        "nombre": "Edificio L",
        "imagen":"https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg",
        "descripcion": "Un apartamento con politica sin mascotas",
        "nroPiezas": "2",
        "precioMensual": "850000",
        "depositoGarantia": "500000",
        "nroContacto": "0981658658",
        "latitud": "-27.303938200107797",
        "longitud": "-55.88535904884339"
    },
    {
        "id":"5",
        "nombre": "Residencial Arminio",
        "imagen":"https://cdn.pixabay.com/photo/2017/03/28/12/13/chairs-2181968_1280.jpg",
        "descripcion": "Un apartamento con politica sin mascotas",
        "nroPiezas": "4",
        "precioMensual": "2000000",
        "depositoGarantia": "1500000",
        "nroContacto": "098165862",
        "latitud": "-27.305272880732932",
        "longitud": "-55.89010655879975"
    },{
        "id":"6",
        "nombre": "Edificio XYZ",
        "imagen":"https://cdn.pixabay.com/photo/2021/02/02/16/18/apartment-5974511_1280.jpg",
        "descripcion": "Departamento cerca de parques",
        "nroPiezas": "3",
        "precioMensual": "950000",
        "depositoGarantia": "800000",
        "nroContacto": "0981654321",
        "latitud": "-27.30765234234125",
        "longitud": "-55.88923245678412"
    },
    {
        "id":"7",
        "nombre": "Residencial ABC",
        "imagen":"https://cdn.pixabay.com/photo/2018/01/18/15/32/room-3090516_1280.jpg",
        "descripcion": "Amplio departamento con vista panorámica",
        "nroPiezas": "2",
        "precioMensual": "750000",
        "depositoGarantia": "600000",
        "nroContacto": "0981654123",
        "latitud": "-27.30654123451234",
        "longitud": "-55.88812345678901"
    },
    {
        "id":"8",
        "nombre": "Residencial Sunset",
        "imagen":"https://cdn.pixabay.com/photo/2018/01/18/15/32/room-3090516_1280.jpg",
        "descripcion": "Moderno departamento con vista al atardecer",
        "nroPiezas": "3",
        "precioMensual": "1200000",
        "depositoGarantia": "1000000",
        "nroContacto": "0987654321",
        "latitud": "-27.306782",
        "longitud": "-55.888359"
    },
    {
        "id":"9",
        "nombre": "Edificio Green",
        "imagen":"https://cdn.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg",
        "descripcion": "Departamento ecológico con paneles solares",
        "nroPiezas": "2",
        "precioMensual": "900000",
        "depositoGarantia": "800000",
        "nroContacto": "0987123456",
        "latitud": "-27.307983",
        "longitud": "-55.888422"
    },{
        "id":"0",
        "nombre": "Edificio A",
        "imagen":"https://cdn.pixabay.com/photo/2017/02/07/18/16/living-room-2046668_1280.jpg",
        "descripcion": "Departamento en zona céntrica",
        "nroPiezas": "2",
        "precioMensual": "900000",
        "depositoGarantia": "800000",
        "nroContacto": "0987123456",
        "latitud": "-27.307017474776146",
        "longitud": "-55.885750651359565"
    },
    {
        "id":"11",
        "nombre": "El Mirador",
        "imagen":"https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_1280.jpg",
        "descripcion": "Vista panorámica al río",
        "nroPiezas": "3",
        "precioMensual": "1200000",
        "depositoGarantia": "1000000",
        "nroContacto": "0987654321",
        "latitud": "-27.307432169325814",
        "longitud": "-55.885010361671455"
    },
    {
        "id":"12",
        "nombre": "Residencial Oasis",
        "imagen":"https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg",
        "descripcion": "Confortable departamento con áreas verdes",
        "nroPiezas": "2",
        "precioMensual": "950000",
        "depositoGarantia": "850000",
        "nroContacto": "0987987654",
        "latitud": "-27.307937427257592",
        "longitud": "-55.88520348072053"
    },
    {
        "id":"13",
        "nombre": "Edificio B",
        "imagen":"https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg",
        "descripcion": "Apartamento con servicios incluidos",
        "nroPiezas": "1",
        "precioMensual": "700000",
        "depositoGarantia": "600000",
        "nroContacto": "0987123456",
        "latitud": "-27.309891705147262",
        "longitud": "-55.88365316390992"
    },
    {
        "id":"14",
        "nombre": "El Palmar",
        "imagen":"https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg",
        "descripcion": "Zona tranquila y segura",
        "nroPiezas": "2",
        "precioMensual": "850000",
        "depositoGarantia": "750000",
        "nroContacto": "0987345678",
        "latitud": "-27.31131210991641",
        "longitud": "-55.884790420532234"
    },
    {
        "id":"15",
        "nombre": "Edificio C",
        "imagen":"https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg",
        "descripcion": "Cerca de parques y comercios",
        "nroPiezas": "3",
        "precioMensual": "1100000",
        "depositoGarantia": "1000000",
        "nroContacto": "0987456123",
        "latitud": "-27.310673406666023",
        "longitud": "-55.88583648204804"
    },
    {
        "id":"16",
        "nombre": "Residencial Plaza",
        "imagen":"https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg",
        "descripcion": "Apartamento moderno con amenities",
        "nroPiezas": "1",
        "precioMensual": "750000",
        "depositoGarantia": "700000",
        "nroContacto": "0987987654",
        "latitud": "-27.308190055360797",
        "longitud": "-55.88356733322144"
    },
    {
        "id":"17",
        "nombre": "Edificio D",
        "imagen":"https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg",
        "descripcion": "Cerca de transporte público",
        "nroPiezas": "2",
        "precioMensual": "800000",
        "depositoGarantia": "700000",
        "nroContacto": "0987123456",
        "latitud": "-27.30670764450352",
        "longitud": "-55.88419497013093"
    }
];
for(let i = 0; i < datosAlquileres.length;i++ ){
  
  var alquilerActual = datosAlquileres[i];
  departamento(alquilerActual.nombre,alquilerActual.descripcion,alquilerActual.nroPiezas,alquilerActual.precioMensual,alquilerActual.depositoGarantia,alquilerActual.nroContacto,alquilerActual.latitud,alquilerActual.longitud, alquilerActual.imagen)
  console.log(alquilerActual.imagen)
}
