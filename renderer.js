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

// Verificar y mostrar el botón si es el momento adecuado
function verificarMostrarBoton() {
    const ahora = new Date();
    const diaSemana = ahora.getDay();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();

    // Verificar si es un día de lunes a jueves a las 16:56 o viernes a las 15:56
    if ((diaSemana >= 1 && diaSemana <= 4 && horas === 16 && minutos === 56) ||
        (diaSemana === 5 && horas === 15 && minutos === 56)) {
        const boton = document.getElementById('boton-crear-csv');
        boton.style.display = 'block';
    }
}

// Variable para almacenar el identificador del intervalo del contador
let contadorIntervalo;

// Verificar y mostrar el botón si es el momento adecuado
function verificarMostrarBoton() {
    const ahora = new Date();
    const diaSemana = ahora.getDay();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();

    // Verificar si es un día de lunes a jueves a las 16:56 o viernes a las 15:56
    if ((diaSemana >= 1 && diaSemana <= 4 && horas === 16 && minutos === 56) ||
        (diaSemana === 5 && horas === 15 && minutos === 56)) {
        const boton = document.getElementById('boton-crear-csv');
        boton.style.display = 'block';
        boton.disabled = false; // Habilitar el botón
    }
}

// Crear archivo CSV con los datos guardados
function crearCSV() {
    const contenidoCSV = llamadas.map(llamada => {
        return `${llamada.nombre},${llamada.numero},${llamada.motivo},${llamada.derivado},${llamada.anexo},${llamada.horaAnotacion}`;
    }).join('\n');

    const ahora = new Date();
    const fechaHora = obtenerFechaHoraFormatoArchivo(ahora);

    const enlace = document.createElement('a');
    enlace.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(contenidoCSV);
    enlace.download = `llamadas_${fechaHora}.csv`;
    enlace.style.display = 'none';
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);

    // Mostrar el contador de 5 minutos
    mostrarContador();
}

// Obtener la fecha y hora en formato adecuado para el nombre de archivo
function obtenerFechaHoraFormatoArchivo(ahora) {
    const dia = ahora.getDate();
    const mes = ahora.getMonth() + 1;
    const año = ahora.getFullYear();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    return `${año}-${mes}-${dia}_${horas}${minutos}${segundos}`;
}

// Mostrar el contador de 5 minutos
function mostrarContador() {
    let contador = 300; // 5 minutos en segundos
    const contadorElemento = document.getElementById('contador');
    contadorElemento.innerHTML = `Tiempo restante: ${formatoMinutosSegundos(contador)}`;

    // Deshabilitar el botón de crear CSV
    const botonCrearCSV = document.getElementById('boton-crear-csv');
    botonCrearCSV.disabled =false;

    contadorIntervalo = setInterval(() => {
        contador--;
        contadorElemento.innerHTML = `Tiempo restante: ${formatoMinutosSegundos(contador)}`;

        // Verificar si el contador llega a cero
        if (contador === 0) {
            clearInterval(contadorIntervalo);
            contadorElemento.innerHTML = '';

            // Borrar los datos guardados
            llamadas = [];

            // Mostrar las llamadas guardadas (vació)
            mostrarLlamadas();

            // Ocultar el botón de crear CSV
            botonCrearCSV.style.display = 'none';
        }
    }, 1000);
}

// Formatear minutos y segundos en formato MM:SS
function formatoMinutosSegundos(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
}
