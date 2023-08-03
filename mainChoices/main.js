import {text} from "./text.js";

let levelCounter = 0;
let intervalForPrinting;
let countForText=0; //Contador para recorrer todos los textos
let decision;
const desicionsTreeFrom0to4=[
    {optionA:true , optionB:false},
    {optionA:true , optionB:false},
    {optionA:false , optionB:true},
    {optionA:false , optionB:true},
    {optionA:true , optionB:true}
];
const urlToDeath='../3_finaly/gameover/index.html';
let statesOfPrinting={
    initial:false,
    decision:false,
    final:false,
    resetAll:function(){
        this.initial=false;
        this.decision=false;
        this.final=false;
    }
}


let backgroundInitialURL='../images/inferno_';
const bodyElement = document.body;
function changeBodyBackground(bgNum){
    bodyElement.style.backgroundImage = `url(${backgroundInitialURL}${bgNum}.jpeg)`;
}

const hellLevelTitle=document.getElementById("mainTitle");

function changeHellLevelTitle(hellNum){
    hellLevelTitle.textContent=`INFIERNO ${hellNum}`;
}
//changeHellLevelTitle(5);
//changeBodyBackground(2);

const optionA_Button=document.getElementById("optionA");
const optionB_Button=document.getElementById("optionB");

function changeOptionsButtonText(button1Text,button2Text){
    optionA_Button.textContent=button1Text;
    optionB_Button.textContent=button2Text;
}

const historyText = document.getElementById("historyText"); 

const nextButton=document.getElementById("button-next"); 

const deleteActualText=()=>{historyText.textContent="";};

function bodyTransition(){
    let opacity=1;
    const intervalForTransition = setInterval(() => {
        opacity -= 0.05;
        bodyElement.style.opacity = opacity;
        console.log(opacity);
        (opacity <= 0)?clearInterval(intervalForTransition):undefined;
    }, 50);
}




function inabilitateButton(button,boolean){
    button.disabled = boolean;
}
    
function printTextInto(textToPrint,msInterval){
    let counterTextList=0;

    intervalForPrinting=setInterval(()=>{
        historyText.textContent+=textToPrint[counterTextList];
        counterTextList++;
        textToPrint[counterTextList]??(clearInterval(intervalForPrinting));
    }, msInterval);
}

function printAllText(parragraphToPrint){
    deleteActualText();
    printTextInto(parragraphToPrint[countForText]);
    countForText++;
}

function nextPage(){
    deleteActualText();
    statesOfPrinting.resetAll();
    levelCounter++;
    levelStart();
}

function nextButtonClick(){

    clearInterval(intervalForPrinting);

    if(!statesOfPrinting.initial){
        console.log(text.lvl[levelCounter].initial);
        printAllText(text.lvl[levelCounter].initial);
        if(countForText >= text.lvl[levelCounter].initial.length){
            countForText=0;
            statesOfPrinting.initial=true;

            optionA_Button.style.display="block";
            optionB_Button.style.display="block";
            nextButton.style.display="none";
        }
    }
    if(statesOfPrinting.decision){
        
        if(!desicionsTreeFrom0to4[levelCounter][decision]){
            redirectToDeath();
        }else{
            if(!statesOfPrinting.final){
                deleteActualText();
                printTextInto(text.lvl[levelCounter].finalText,historyText);
                statesOfPrinting.final=true;
            }else if(levelCounter!==4){
                bodyTransition();
                setTimeout(nextPage,3000)
            }else{
                if(decision==="optionA"){
                    setTimeout(function() {
                        window.location.href = "../levels/level-5/level-5-cross/First/five.html";
                    }, 3000);
                }else{
                    setTimeout(function() {
                        window.location.href = "../levels/level-5/level-5-lance/First/five.html";
                    }, 3000);
                }
            }
            

        }
    }
    //!desicionsTreeFrom0to4[levelCounter][decision]){
        
    
}

function redirectToDeath(){
    bodyTransition();
    setTimeout(function() {
        window.location.href = urlToDeath;
    }, 3000);
}


function optionsButtonClick(event){
    clearInterval(intervalForPrinting);
    deleteActualText();
    optionA_Button.style.display="none";
    optionB_Button.style.display="none";
    nextButton.style.display="block";
    
    decision=event.target.id;
    console.log(desicionsTreeFrom0to4[levelCounter][decision]);
    printTextInto(text.lvl[levelCounter][decision].postD,historyText);
    statesOfPrinting.decision=true;
}

function levelStart(){
    historyText.textContent="Click en Siguiente para Continuar";
    decision=undefined;
    statesOfPrinting.resetAll();
    bodyElement.style.opacity=1;

    changeBodyBackground(levelCounter);
    changeHellLevelTitle(levelCounter);
    console.log(text.lvl[levelCounter],text.lvl[levelCounter]);
    changeOptionsButtonText(text.lvl[levelCounter].optionA.text , text.lvl[levelCounter].optionB.text);




}
levelStart();


nextButton.addEventListener("click",nextButtonClick);
optionA_Button.addEventListener("click",optionsButtonClick);
optionB_Button.addEventListener("click",optionsButtonClick);
  
/*
Para desbordamiento:
let contenedorParrafo=document.getElementById("historyContainer");
let alturaInicial=contenedorParrafo.offsetHeight;
if( contenedorParrafo.offsetHeight>alturaInicial){
            contenedorParrafo.style.height=alturaInicial+'px';
            historyText.textContent=historyText.textContent.slice(0,-1);
            console.log("latest: "+contenedorParrafo.offsetHeight);
            clearInterval(intervalForPrinting);
        }
*/

/*
function initialPrinting(){
    deleteActualText();
    printTextInto(text.initial[countForText],historyText,1);
    countForText++;
}
*/


/*
function nextPage(){
    let opacidad = 1;
    const intervalForPrinting = setInterval(() => {
        opacidad -= 0.05;
        document.body.style.numAction = opacidad;
        if (opacidad <= 0) {
            clearInterval(intervalForPrinting); // Detener el intervalForPrinting cuando la opacidad sea 0
        }
    }, 50);

    
    let newList=[true,false,false]
    updatePlayerObject(newList);
    console.log(getPlayerObject());
    setTimeout(function() {
        window.location.href = "../level-1/first.html";
    }, 3000);
      
}

*/