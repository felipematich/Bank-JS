let cuentas = JSON.parse(sessionStorage.getItem("cuentas"))

if(cuentas == undefined){
    cuentas = []
}
else{
    let aux = []
    cuentas.forEach(element => {
        aux.push(new cuentaBancaria(element.usuario, element.correo, element.contra, element.limite, element.saldo))
    });
    cuentas = aux;
}

function buscarCuenta (nombreCuenta){
    return cuentas.find((elemento) => { 
    return elemento.usuario === nombreCuenta});
}

function depositarEnCuenta(nombre, monto) {
    let cuenta = buscarCuenta(nombre);
    cuenta.deposito(monto);
}

function extraerDeCuenta(nombre, monto){
    let cuenta = buscarCuenta(nombre);
    cuenta.extraer(monto);
}

function login(){
    let usuariolog = user1.value;
    let correolog = email1.value;
    let contralog = password1.value;
    let contra1log = passwordcheck.value;

    for (let i = 0; i<cuentas.length; i++){
        if ((cuentas[i].usuario == usuariolog) && (cuentas[i].correo == correolog) && (cuentas[i].contra == contralog) && (cuentas[i].contra == contra1log)){
            sessionStorage.setItem("login", JSON.stringify(cuentas[i]));
            Swal.fire({
                title: 'Login exitoso',
                text: `Bienvenido, ${usuariolog}`,
                icon: 'success',
                timer: 1500,
            });
            log.innerText = `Hola, ${usuariolog.toUpperCase()}`;
            break;
        }
        else if ((cuentas[i].usuario != usuariolog) || (cuentas[i].correo != correolog) || (cuentas[i].contra != contralog) || (cuentas[i].contra != contra1log)){
            Swal.fire({
                title: 'No encontramos el usuario',
                text: 'Algun dato fue ingresado incorrectamente',
                icon: 'error',
                confirmButtonText: 'Continuar'
            });
            continue;
        }
        else{}
    }
}