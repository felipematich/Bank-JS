class cuentaBancaria {
    constructor(usuarioIngresado, correoIngresado, contraIngresado, limiteIngresado) {
        this.usuario = usuarioIngresado;
        this.correo = correoIngresado;
        this.contra = contraIngresado;
        this.limite = limiteIngresado;
        this.saldo = 0;
    }

    deposito(monto) {
        this.saldo += monto;
    }
    extraer(monto) {
        this.saldo -= (monto + impuesto(monto));
    }
    impuesto(monto) {
        return monto * 0.1;
    }
}


function impuesto(monto) {
    return monto * 0.1;
}

function extraer(monto) {
    saldo = saldo - (monto + impuesto(monto));

}