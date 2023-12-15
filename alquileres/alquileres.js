var alquileresHTML = '';

datosAlquileres.forEach(function(alquiler) {


    alquileresHTML = `
        <div class="alquiler" id="arquiler.${alquiler.id}"> 
            
            <h2>${alquiler.nombre}</h2>
            <p><strong>Descripción:</strong> ${alquiler.descripcion}</p>
            <p><strong>Número de piezas:</strong> ${alquiler.nroPiezas}</p>
            <p><strong>Precio mensual:</strong> ${alquiler.precioMensual}</p>
            <p><strong>Depósito de garantía:</strong> ${alquiler.depositoGarantia}</p>
            <p><strong>Número de contacto:</strong> ${alquiler.nroContacto}</p>
          
            

        </div>
        
    `;

});

document.getElementById('alquileres').innerHTML = alquileresHTML;

var alquilerElement = document.querySelectorAll('.alquiler');

for(var i=0; i< alquilerElement.length; i++){
    var img = datosAlquileres[i].imagen;
    alquilerElement[i].style.backgroundImage =  `url(${img})`;  


}


