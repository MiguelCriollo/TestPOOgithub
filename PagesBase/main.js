import { objetoTest } from "../TESTS/MostradoParrafos/objetos.js";

let historyText = document.getElementById("historyText");

let nextButton=document.getElementById("button-next");

nextButton.addEventListener("click",function(){
    activatePrinting();
});
    
function activatePrinting(){
        let cont=0;
        historyText.textContent="";
        let intervalo;
        let textToPrint=objetoTest.C0.inicial;
        function test(){
            historyText.textContent+=textToPrint[cont];
            cont++;
            console.log(`Contador: ${cont} dice: {textToPrint[cont]}`);
            textToPrint[cont]??clearInterval(intervalo);
        }
        intervalo=setInterval(test, 20);
}


  
