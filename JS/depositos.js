let cuentaInput = document.getElementById("usuarioDep");
let cantidad = document.getElementById("montoDep");
let botondep = document.getElementById("depositoBoton");
let ultDep = document.getElementById("contenedorDep");

botondep.onclick = (e) => {
    let monto = parseFloat(cantidad.value);
    let nombreCuenta = cuentaInput.value;
    let cuenta = buscarCuenta(nombreCuenta);
    if (nombreCuenta == "" || isNaN(monto) || cuenta == undefined || monto < 0) {
        Swal.fire({
            title: 'Deposito fallido',
            text: 'Algun dato fue ingresado incorrectamente',
            icon: 'warning',
            confirmButtonText: 'Continuar'
        });
    } else {
        depositarEnCuenta(nombreCuenta, monto);
        sessionStorage.setItem("cuentas", JSON.stringify(cuentas));
        ultDep.innerHTML = `<p>${cuenta.usuario.toUpperCase()}: $${monto.toFixed(2)}</p><p>Saldo en cuenta: $${cuenta.saldo.toFixed(2)}`;
        Swal.fire({
            title: 'Deposito exitoso',
            text: 'Deposito realizado exitosamente',
            icon: 'success',
            timer: 1500,
        });
    }
};




