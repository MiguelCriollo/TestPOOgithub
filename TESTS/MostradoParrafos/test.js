import {objetoTest} from "./objetos.js";

let boton = document.getElementById("mi-boton");
let textoPrueba = document.getElementById("texto");
let imprimir;
function textPrinting(textToPrint){
    let cont=0;
    textoPrueba.textContent="";
    return ()=>{
        textoPrueba.textContent+=textToPrint[cont];
        cont++;
        console.log(`Contador: ${cont} dice: {textToPrint[cont]}`);
        textToPrint[cont]??clearInterval(intervalo);
    }
}

function activatePrinting(){
    let intervalo=setInterval(imprimir, 20);
}
function newTextOrigin(){
    imprimir=textPrinting(objetoTest.C0.inicial);
}
newTextOrigin();

boton.addEventListener("click",activatePrinting);
