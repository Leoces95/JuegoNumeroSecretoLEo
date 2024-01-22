let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function intentoDeUsuario(){
    alert('Click desde el boton');
}
function asignarTextoElemento  (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    // si el número generado está en la lista
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    // si ya sorteamos todos los números
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }
    else{
        if(listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

console.log(numeroSecreto);

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos}  ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
        else{
        if(numeroSecreto > numeroDeUsuario){
            asignarTextoElemento('p','El número es mayor');
        }
        else{
            asignarTextoElemento('p','El numero es menor');
        }   
    }
    intentos++;
    limpiarCaja();
    return;
}
function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    // limpiar la caja
    limpiarCaja();
    // indicar mensaje del intervalo del numero
    condicionesIniciales();
    // generar el número aleatorio
    numeroSecreto = generarNumeroSecreto();
    // deshabilitar el boton de un nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    // inicializar un número de intentos
    
}
condicionesIniciales();
let lista = [1,2,3,4, 5];
lista.push(4);


