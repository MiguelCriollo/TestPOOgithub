import {objetoTest} from "./objetos.js";

let textoPrueba = document.getElementById("texto");
let boton = document.getElementById("mi-boton");
textoPrueba.textContent="";
let cont=0;


function test(){
    textoPrueba.textContent+=objetoTest.C1.inicial[cont];
    cont++;
    objetoTest.C1.inicial[cont]??clearInterval(intervalo);
}


let intervalo=setInterval(test, 100);


boton.addEventListener("click",test);

