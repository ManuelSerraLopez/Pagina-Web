const tiempode_coccion = 40;

function calcularTiempo() { // corregir el nombre de la función

    const capas = parseInt(document.getElementById('Capas').value);
    const tiempodecoccion = parseInt(document.getElementById('tiempo').value);

    if (capas < 0 || tiempodecoccion < 0) {
        alert('Valor erroneo');
        return;
    }

    const TiempoRestante = tiempode_coccion - tiempodecoccion;
    const TiempodePreparacion = capas * 2;
    const TotaldeTiempo = TiempoRestante + TiempodePreparacion;

    document.getElementById('resultado').innerHTML = `
    <p>Tiempo Restante: ${TiempoRestante} minutos</p>
    <p>Tiempo de Preparacion: ${TiempodePreparacion} minutos</p>
    <p>Total de Tiempo: ${TotaldeTiempo} minutos</p>`;
}