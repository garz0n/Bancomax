var saldoTotal = 5000;
document.getElementById('mostrarSaldo').innerHTML=`<div class="alert"> $ ${saldoTotal}</div>`;

function iniciarSesion(){
var NIP = document.getElementById('NIP').value;
var contraseña = document.getElementById('contraseñaInicio').value;
var nombre= document.getElementById('name').value;
var apellido= document.getElementById('lastName').value;
if(NIP != 1234 || contraseña != 'javascript'||nombre == '' || apellido ==''){
        alert('checa tus datos rey')
    }else{
        location.href='principal.html';
        alert(`Bienvenido ${nombre} ${apellido}`)
    }
}

function retirar(){
    var saldoRetiro = document.getElementById('retiro').value;
    if (saldoRetiro > saldoTotal){
        alert('La cantidad que solicitas no está disponible, verifica tu saldo')
    }else{
        saldoTotal = saldoTotal-saldoRetiro;
        document.getElementById('mostrarSaldo').innerHTML=`<div class="alert"> $ ${saldoTotal}</div>`
        alert(`Retiro exitoso de $ ${saldoRetiro}`);
    }
}

function ingresar(){
    var saldoIngreso = document.getElementById('ingresar').value;
    saldoTotal = parseInt(saldoTotal)+parseInt(saldoIngreso);
    document.getElementById('mostrarSaldo').innerHTML=`<div class="alert"> $ ${saldoTotal}</div>`;
    alert(`Has ingresado $ ${saldoIngreso}`);
}

function transferir(){
        var saldoTransferencia = document.getElementById('transferencia').value;
    if (saldoTransferencia > saldoTotal){
        alert('La cantidad que solicitas no está disponible, verifica tu saldo')
    }else{
        saldoTotal = saldoTotal-saldoTransferencia;
        document.getElementById('mostrarSaldo').innerHTML=`<div class="alert"> $ ${saldoTotal}</div>`;
        alert(`Transferencia exitosa`)
    }
}
