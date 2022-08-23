"use strict";

/* TODO */
/*
var numeroUno = parseInt(prompt("Ingresar principio del rango numérico"));
var numeroDos = parseInt(prompt("Ingresar final del rango numérico"));
var numeroRango = parseInt(prompt("Ingresar número en el rango numérico"));


if (numeroUno > numeroDos){
    alert("El rango no puede ser invertido");
} else if ((numeroRango >= numeroUno) && (numeroRango <= numeroDos)){
    if ((numeroRango % 2) == 0){
        alert("el número está en el rango y es par");
    } else {
        alert("el número está en el rango");
    }
} else if ((numeroRango < numeroUno) || (numeroRango > numeroDos)){
    if ((numeroRango % 2) == 0){
        alert("el número no está en el rango");
    } else {
        alert("el número no está en el rango y es impar");
    }
}
*/

var numeroUno = 0;
var numeroDos = 0;
var numeroRango = 0;
var contador = 1;

do {
    numeroUno = parseInt(prompt("Ingresar principio del rango numérico"));
    numeroDos = parseInt(prompt("Ingresar final del rango numérico"));

    if (numeroUno > numeroDos){
        alert("El rango no puede ser invertido");
    } else {
        numeroRango = parseInt(prompt("Ingresar número en el rango numérico"));
        if ((numeroRango >= numeroUno) && (numeroRango <= numeroDos)){
            if ((numeroRango % 2) == 0){
                alert("el número está en el rango y es par");
            } else {
                alert("el número está en el rango");
            }
        } else if ((numeroRango < numeroUno) || (numeroRango > numeroDos)){
            if ((numeroRango % 2) == 0){
                alert("el número no está en el rango");
            } else {
                alert("el número no está en el rango y es impar");
            }
        }
    }

    
    contador++

} while (contador == 1)