let cuentaExt = document.getElementById("usuarioExt");
let cantidadExt = document.getElementById("montoExt");
let botonExt = document.getElementById("extraccionesBoton");
let ultExt = document.getElementById("contenedorExt");


botonExt.onclick = (e) => {
    let monto = parseInt(cantidadExt.value);
    let nombreCuenta = cuentaExt.value;
    let cuenta = buscarCuenta(nombreCuenta);
    console.log(nombreCuenta);
    console.log(monto);
    if (nombreCuenta == "" || isNaN(monto) || cuenta == undefined){
        Swal.fire({
            title: 'Extraccion fallida',
            text: 'Algun dato fue ingresado incorrectamente',
            icon: 'warning',
            confirmButtonText: 'Continuar'
        });
    }
    else {
        if (cuenta.saldo < (monto + impuesto(monto)) || monto < 0){
            Swal.fire({
                title: 'Saldo insuficiente',
                text: `Saldo actual: $${cuenta.saldo}. Recuerde que se cobra un 10% de impuestos`,
                icon: 'error',
                confirmButtonText: 'Continuar'
            });
        }
        else {
        extraerDeCuenta(nombreCuenta, monto);
        sessionStorage.setItem("cuentas", JSON.stringify(cuentas));
        ultExt.innerHTML = `<p>${cuenta.usuario.toUpperCase()}: $${monto}</p><p>Impuestos: $${impuesto(monto)}</p><p>Saldo en cuenta: $${cuenta.saldo}`;
        Swal.fire({
            title: 'Extraccion exitosa',
            text: 'Extraccion realizado exitosamente',
            icon: 'success',
            timer: 1500,
        });
        }
    }
    
}