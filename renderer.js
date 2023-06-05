// Array para almacenar las llamadas guardadas
let llamadas = [];

// Función para guardar la llamada
function guardarLlamada() {
    const nombre = document.getElementById('nombre').value;
    const numero = document.getElementById('numero').value;
    const motivo = document.getElementById('motivo').value;
    const derivado = document.getElementById('derivado').value;
    const anexo = document.getElementById('anexo').value;
    const horaAnotacion = obtenerHoraActual();

    // Crear objeto de llamada
    const llamada = {
        nombre: nombre,
        numero: numero,
        motivo: motivo,
        derivado: derivado,
        anexo: anexo,
        horaAnotacion: horaAnotacion
    };

    llamadas.push(llamada);

    // Limpiar los campos del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('motivo').value = 'Consulta';
    document.getElementById('derivado').value = '';
    document.getElementById('anexo').value = '';

    // Mostrar las llamadas guardadas
    mostrarLlamadas();
}

function obtenerHoraActual() {
    const ahora = new Date();
    const dia = ahora.getDate();
    const mes = ahora.getMonth() + 1; // Los meses en JavaScript se cuentan desde 0
    const año = ahora.getFullYear();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();

    // Formatear la hora y fecha actual
    const horaAnotacion = `${dia}/${mes}/${año} ${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;

    return horaAnotacion;
}

// Función para mostrar las llamadas guardadas en la lista
function mostrarLlamadas() {
    const listaLlamadas = document.getElementById('lista-llamadas');
    listaLlamadas.innerHTML = ''; // Limpiar la lista antes de actualizarla

    llamadas.forEach((llamada) => {
        const itemLista = document.createElement('li');
        itemLista.innerHTML = `
            <strong>Nombre:</strong> ${llamada.nombre} -
            <strong>Número:</strong> ${llamada.numero} -
            <strong>Motivo:</strong> ${llamada.motivo} -
            <strong>Derivado a:</strong> ${llamada.derivado} -
            <strong>Anexo:</strong> ${llamada.anexo} -
            <strong>Hora de anotación:</strong> ${llamada.horaAnotacion}
        `;
        listaLlamadas.appendChild(itemLista);
    });
}
