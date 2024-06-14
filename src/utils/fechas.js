function obtenerAnoActual() {
    const fechaActual = new Date();
    const anoActual = fechaActual.getFullYear();
    return anoActual;
}

export {obtenerAnoActual};