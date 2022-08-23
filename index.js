"use strict";

/* TODO */

var rangoInferior = parseInt(prompt("Ingresar principio del rango numérico"));
var rangoSuperior = parseInt(prompt("Ingresar final del rango numérico"));
var rangoValor = parseInt(prompt("Ingresar número en el rango numérico"));


if (rangoInferior >= rangoSuperior){
    alert("El rango no puede ser invertido");
} else if ((rangoValor >= rangoInferior) && (rangoValor <= rangoSuperior)){
    if ((rangoValor % 2) == 0){
        alert("el número está en el rango y es par");
    } else {
        alert("el número está en el rango");
    }
} else if ((rangoValor < rangoInferior) || (rangoValor > rangoSuperior)){
    if ((rangoValor % 2) == 0){
        alert("el número no está en el rango");
    } else {
        alert("el número no está en el rango y es impar");
    }
}