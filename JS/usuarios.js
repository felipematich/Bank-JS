let user = document.getElementById("usuario");
let email = document.getElementById("email");
let password = document.getElementById("contraseña");
let limit = document.getElementById("limite");
let user1 = document.getElementById("usuario1");
let email1 = document.getElementById("email1");
let password1 = document.getElementById("contraseña1");
let passwordcheck = document.getElementById("contraseña2");
let bot1 = document.getElementById("bot1");
let bot2 = document.getElementById("bot2");
let log = document.getElementById("login");


bot1.onclick = (e) => {
    let usuario = user.value;
    let correo = email.value;
    let contra = password.value;
    let limite = limit.value;
    if (usuario == "" || correo == "" || contra == "" || isNaN(limite)){
        Swal.fire({
            title: 'Registro fallido',
            text: 'Algun dato fue ingresado incorrectamente',
            icon: 'warning',
            confirmButtonText: 'Continuar'
        });
    }
    else{
        cuentas.push(new cuentaBancaria(usuario, correo, contra, limite));
        sessionStorage.setItem("cuentas", JSON.stringify(cuentas));
        Swal.fire({
            title: 'Usuario creado',
            text: 'Usuario creado exitosamente',
            icon: 'success',
            timer: 1500,
        });
    }
}


bot2.addEventListener("click", (e)=> {
    login(); 
});