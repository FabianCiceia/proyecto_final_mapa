var alquileresHTML = '';
datosAlquileres.forEach(function(alquiler) {


    alquileresHTML += `

        <a href="#">
            <div class="imagen">
                <img src="${alquiler.imagen}" alt="Imagen 1">
                <div class="capa">
                    <h3  class="datosArq">
                        <p>${alquiler.descripcion}</p>
                        <p><strong>Número de piezas:</strong> ${alquiler.nroPiezas}</p>
                    </h3>
                    <p class="datosArq">
                        <p><strong>Precio mensual:</strong> ${alquiler.precioMensual}</p>
                        <p><strong>Depósito de garantía:</strong> ${alquiler.depositoGarantia}</p>
                        <p><strong>Número de contacto:</strong> ${alquiler.nroContacto}</p>
                    </p>
                </div>
            </div>
         </a>
    `;
});
document.getElementById('alquiler').innerHTML = alquileresHTML;


