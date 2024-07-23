document.getElementById('buscarCliente').addEventListener('input', filtrarTabla);
document.getElementById('buscarReclamacion').addEventListener('input', filtrarTabla);

function cargarDatos() {
    const storedData = JSON.parse(localStorage.getItem('piezas')) || [];
    const tbody = document.querySelector('#tablaPiezas tbody');
    tbody.innerHTML = '';
    storedData.forEach((dato, index) => {
        const row = document.createElement('tr');
        for (const key in dato) {
            const cell = document.createElement('td');
            if (key === 'imagen') {
                const img = document.createElement('img');
                img.src = dato[key];
                img.width = 100;
                img.height = 100;
                cell.appendChild(img);
            } else {
                cell.textContent = dato[key];
            }
            row.appendChild(cell);
        }
        const actionsCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => eliminarRegistro(index);
        actionsCell.appendChild(deleteButton);
        row.appendChild(actionsCell);
        tbody.appendChild(row);
    });
}

function filtrarTabla() {
    const buscarCliente = document.getElementById('buscarCliente').value.toLowerCase();
    const buscarReclamacion = document.getElementById('buscarReclamacion').value.toLowerCase();
    const rows = document.querySelectorAll('#tablaPiezas tbody tr');
    rows.forEach(row => {
        const cliente = row.children[2].textContent.toLowerCase();
        const reclamacion = row.children[1].textContent.toLowerCase();
        if (cliente.includes(buscarCliente) && reclamacion.includes(buscarReclamacion)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function eliminarRegistro(index) {
    let storedData = JSON.parse(localStorage.getItem('piezas')) || [];
    storedData.splice(index, 1);
    localStorage.setItem('piezas', JSON.stringify(storedData));
    cargarDatos();
}

function descargarExcel() {
    let table = document.getElementById('tablaPiezas');
    let tableHTML = table.outerHTML.replace(/ /g, '%20');

    let downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);
    downloadLink.href = 'data:application/vnd.ms-excel,' + tableHTML;
    downloadLink.download = 'lista_piezas.xls';
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

window.onload = cargarDatos;
