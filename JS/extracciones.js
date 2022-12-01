let cuentaExt = document.getElementById("usuarioExt");
let cantidadExt = document.getElementById("montoExt");
let botonExt = document.getElementById("extraccionesBoton");
let ultExt = document.getElementById("contenedorExt");


botonExt.onclick = (e) => {
    let monto = parseFloat(cantidadExt.value);
    let nombreCuenta = cuentaExt.value;
    let cuenta = buscarCuenta(nombreCuenta);
    if (nombreCuenta == "" || isNaN(monto) || cuenta == undefined){
        Swal.fire({
            title: 'Extraccion fallida',
            text: 'Algun dato fue ingresado incorrectamente',
            icon: 'warning',
            confirmButtonText: 'Continuar'
        });
    }
    else {
        if (monto > cuenta.limite){
            Swal.fire({
                title: 'Limite excedido',
                text: `Su limite de extraccion es de $${cuenta.limite.toFixed(2)}`,
                icon: 'error',
                confirmButtonText: 'Continuar'
            });
        }
        else if (cuenta.saldo < (monto + impuesto(monto)) || monto < 0){
            Swal.fire({
                title: 'Saldo insuficiente',
                text: `Saldo actual: $${cuenta.saldo.toFixed(2)}. Recuerde que se cobra un 10% de impuestos`,
                icon: 'error',
                confirmButtonText: 'Continuar'
            });
        }
        else {
        extraerDeCuenta(nombreCuenta, monto);
        sessionStorage.setItem("cuentas", JSON.stringify(cuentas));
        ultExt.innerHTML = `<p>${cuenta.usuario.toUpperCase()}: $${monto.toFixed(2)}</p><p>Impuestos: $${impuesto(monto).toFixed(2)}</p><p>Saldo en cuenta: $${cuenta.saldo.toFixed(2)}`;
        Swal.fire({
            title: 'Extraccion exitosa',
            text: 'Extraccion realizado exitosamente',
            icon: 'success',
            timer: 1500,
        });
        }
    }
    
}