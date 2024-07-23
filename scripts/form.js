function guardarDatos() {
    const datos = {
        fechaDocumento: document.getElementById('fechaDocumento').value,
        numeroReclamacion: document.getElementById('numeroReclamacion').value,
        nombreCliente: document.getElementById('nombreCliente').value,
        tipoMaquina: document.getElementById('tipoMaquina').value,
        numeroSerie: document.getElementById('numeroSerie').value,
        piezaAveriada: document.getElementById('piezaAveriada').value,
        descripcionAveria: document.getElementById('descripcionAveria').value,
        numeroParte: document.getElementById('numeroParte').value,
        cantidad: document.getElementById('cantidad').value,
        sucursal: document.getElementById('sucursal').value,
        ubicacion: document.getElementById('ubicacion').value,
        imagen: document.getElementById('vistaPrevia').src
    };

    let storedData = JSON.parse(localStorage.getItem('piezas')) || [];
    storedData.push(datos);
    localStorage.setItem('piezas', JSON.stringify(storedData));
    alert('Datos guardados correctamente');
}

function mostrarImagen(event) {
    const reader = new FileReader();
    reader.onload = function(){
        const vistaPrevia = document.getElementById('vistaPrevia');
        vistaPrevia.src = reader.result;
        vistaPrevia.style.display = 'block';
    }
    reader.readAsDataURL(event.target.files[0]);
}

function imprimir() {
    window.print();
}
