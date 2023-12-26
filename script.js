const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");
const box0 = document.getElementById("box0");
const boxSuma = document.getElementById("boxSuma");
const boxResta = document.getElementById("boxResta");
const boxFloat = document.getElementById("boxFloat");
const boxMultiplicacion = document.getElementById("boxMultiplicacion");
const boxDivision = document.getElementById("boxDivision");
const boxClear = document.getElementById("boxClear");
const boxResultado = document.getElementById("boxResultado");

const boxOperation = document.getElementById("operationBox");
box1.addEventListener("click",()=>{
    boxOperation.textContent="1";
});

box2.addEventListener("click",()=>{
    boxOperation.textContent="2";
});

box3.addEventListener("click",()=>{
    boxOperation.textContent="3";
});

box4.addEventListener("click",()=>{
    boxOperation.textContent="4";
});

box5.addEventListener("click",()=>{
    boxOperation.textContent="5";
});

box6.addEventListener("click",()=>{
    boxOperation.textContent="6";
});

box7.addEventListener("click",()=>{
    boxOperation.textContent="7";
});

box8.addEventListener("click",()=>{
    boxOperation.textContent="8";
});

box9.addEventListener("click",()=>{
    boxOperation.textContent="9";
});

box0.addEventListener("click",()=>{
    boxOperation.textContent="0";
});

