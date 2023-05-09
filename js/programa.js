//FUNCIONES DEL PROGRAMA

//funcion obtener nombre del usuario
function nombre_usuario(){
    let nombre = null
    while(isNaN(nombre) != true){
        nombre = prompt("diga su nombre: ");
        nombre = nombre.toLowerCase();
        if(isNaN(nombre)){
            return nombre
        }
        else{
            alert("entrada incorrecta, ingrese su nombre por favor")
        }
    }
}

//funcion obtener dni del usuario
function dni_usuario(){
    let dni;
    while(isNaN(dni)){
        dni = parseInt(prompt("diga su dni: "));
        if(!isNaN(dni)){
            return dni
        }
        else{
            alert("entrada incorrecta, ingrese su dni por favor")
        }
    }
}

//funcion obtener edad del usuario
function edad_usuario(){
    let edad;
    while(isNaN(edad) || edad <18){
        edad = parseInt(prompt("diga su edad: "));
        if(edad >=18){
            return edad
        }
        else if(edad < 18){
            alert("la edad debe ser mayor a 18 años para continuar");
        }
        else{
            alert("entrada incorrecta, ingrese su edad por favor")
        }
    }
}

//funcion para ingreso de monto solicitado por el usuario
function monto_solicitado(){
    let monto = 0
    while(monto<=10000 || monto>1000000){
        monto = parseInt(prompt("Indique cuanto dinero quiere solicitar: "));
        if(monto>=10000 && monto<1000000){
            return monto
        }
        else{
            monto = 0
            alert("SOLICITUD MINIMA: $10.000 -- SOLICITUD MAXIMA: $1.000.000")
        }
    }
}

// funcion para elegir la cantidad de cuotas
function elegir_cuotas(){
    let consulta = null
    let cuotas = 1
    while(cuotas != 3 || cuotas !=6 || cuotas !=12){
        cuotas = parseInt(prompt("Indicar cantidad de cuotas a pagar. OPCIONES: 3, 6 y 12"))
        if(cuotas==3){
            alert("El porcentaje a pagar en 3 cuotas es del 30%")
            consulta = prompt("Desea continuar con la operacion? INDIQUE SI o NO.")
            consulta = consulta.toLowerCase();
            if(consulta == "si"){
                cuotas = 3;
                return cuotas
            }
            else if(consulta == "no"){
                alert("Te presentamos nuevamente les opciones de cuotas")
            }
            else{
                alert("entrada incorrecta, vuelva a intentarlo")
            }
        }
        else if(cuotas==6){
            alert("El porcentaje a pagar en 6 cuotas es del 50%")
            consulta = prompt("Desea continuar con la operacion? INDIQUE SI o NO.")
            consulta = consulta.toLowerCase();
            if(consulta == "si"){
                cuotas = 6;
                return cuotas
            }
            else if(consulta == "no"){
                alert("Te presentamos nuevamente les opciones de cuotas")
            }
            else{
                alert("entrada incorrecta, vuelva a intentarlo")
            }
        }
        else if(cuotas==12){
            alert("El porcentaje a pagar en 12 cuotas es del 90%")
            consulta = prompt("Desea continuar con la operacion? INDIQUE SI o NO.")
            consulta = consulta.toLowerCase();
            if(consulta == "si"){
                cuotas = 12;
                return cuotas
            }
            else if(consulta == "no"){
                alert("Te presentamos nuevamente les opciones de cuotas")
            }
            else{
                alert("entrada incorrecta, vuelva a intentarlo")
            }
        }
        else{
            alert("ERROR: Cantidad de cuotas incorrecta")
        }
    }
}

// funcion para evaluar monto de porcentajes
function porcentajes(){
    let porcentaje_a_pagar = null
    if(cuotas_usuario == 3){
        porcentaje_a_pagar = 0.3;
    }
    else if(cuotas_usuario == 6){
        porcentaje_a_pagar = 0.5;
    }
    else if(cuotas_usuario == 12){
        porcentaje_a_pagar = 0.9;
    }
    return porcentaje_a_pagar
}

// funcion que indica cuanto va a pagar total el cliente
function pagototal(){
    let monto_a_pagar = monto_solicito_cliente + (monto_solicito_cliente * porcentaje_elegido)
    return monto_a_pagar
}

// funcion que indica cuanto se pagara por cuota
function cuotas_a_pagar(){
    let cuotas_cliente = pago_total_cliente / cuotas_usuario
    return cuotas_cliente
}

//ALERTAS E INICIO DEL PROGRAMA
alert("BIENVENIDO A BANCO DE PROGRAMADORES")
alert("POR CUESTIONES DE SEGURIDAD, NECESITAMOS COMPROBAR ALGUNOS DATOS")
//VARIABLES DEL PROGRAMA
let nombre_cliente = nombre_usuario();
let dni = dni_usuario();
let edad = edad_usuario();
let monto_solicito_cliente = monto_solicitado();
let cuotas_usuario = elegir_cuotas();
let porcentaje_elegido = porcentajes();
let pago_total_cliente = pagototal();
let cuanto_por_cuota = cuotas_a_pagar();
alert("GRACIAS POR ELEGIRNOS, A CONTINUACION TE MOSTRAREMOS LOS DETALLES DE TU PRESTAMOS");
alert("Nombre del solicitante: " + nombre_cliente + "\nNumero de DNI: " + dni + "\nMonto solicitado: " + monto_solicito_cliente + "\nCuotas elegidas: " + cuotas_usuario + "\nPorcentaje a pagar: " + porcentaje_elegido + "\nTotal a pagar: " + pago_total_cliente + "\nTotal a pagar por cuota: " + cuanto_por_cuota);
alert("LO ESPERAMOS NUEVAMENTE. GRACIAS.");

