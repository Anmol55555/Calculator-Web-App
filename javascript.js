var input = document.getElementById("userInput");
var clearScreen = document.getElementById("clear-screen");
var delBtn = document.getElementById("delBtn");
var perBtn = document.getElementById("perBtn");
var divBtn = document.getElementById("divBtn");
var Btn7 = document.getElementById("Btn7");
var Btn8 = document.getElementById("Btn8");
var Btn9 = document.getElementById("Btn9");
var mulBtn = document.getElementById("mulBtn");
var Btn4 = document.getElementById("Btn4");
var Btn5 = document.getElementById("Btn5");
var Btn6 = document.getElementById("Btn6");
var subBtn = document.getElementById("subBtn");
var Btn1 = document.getElementById("Btn1");
var Btn2 = document.getElementById("Btn2");
var Btn3 = document.getElementById("Btn3");
var addBtn = document.getElementById("addBtn");
var Btn0 = document.getElementById("Btn0");
var Btn00 = document.getElementById("Btn00");
var decimalBtn = document.getElementById("decimalBtn");
var equalBtn = document.getElementById("equalBtn");



function clickEffect(Btn)
{
    Btn.style.transition = "background-color 0.2s";
    Btn.style.transitionTimingFunction = "ease";
    Btn.addEventListener('mousedown', () => {
        Btn.style.backgroundColor = "#353935"/*  "#696969" "red"*/;
    });

    Btn.addEventListener('mouseup', () => {
        Btn.style.backgroundColor = "black";
    });
}



Btn1.addEventListener('click', () => {
    input.value += "1";
    clickEffect(Btn1);
});

Btn2.addEventListener('click', () => {
    input.value += "2";
    clickEffect(Btn2);
});

Btn3.addEventListener('click', () => {
    input.value += "3";
    clickEffect(Btn3);
});

Btn4.addEventListener('click', () => {
    input.value += "4";
    clickEffect(Btn4);
});

Btn5.addEventListener('click', () => {
    input.value += "5";
    clickEffect(Btn5);
});

Btn6.addEventListener('click', () => {
    input.value += "6";
    clickEffect(Btn6);
});

Btn7.addEventListener('click', () => {
    input.value += "7";
    clickEffect(Btn7);
});

Btn8.addEventListener('click', () => {
    input.value += "8";
    clickEffect(Btn8);
});

Btn9.addEventListener('click', () => {
    input.value += "9";
    clickEffect(Btn9);
});

Btn0.addEventListener('click', () => {
    input.value += "0";
    clickEffect(Btn0);
});

Btn00.addEventListener('click', () => {
    input.value += "00";
    clickEffect(Btn00);
});

decimalBtn.addEventListener('click', () => {
    input.value += ".";
    clickEffect(decimalBtn);
});

addBtn.addEventListener('click', () => {
    input.value += "+";
    clickEffect(addBtn);
});

subBtn.addEventListener('click', () => {
    input.value += "-";
    clickEffect(subBtn);
});

mulBtn.addEventListener('click', () => {
    input.value += "*";
    clickEffect(mulBtn);
});

divBtn.addEventListener('click', () => {
    input.value += "/";
    clickEffect(divBtn);
});

perBtn.addEventListener('click', () => {
    input.value += "%";
    clickEffect(perBtn);
});




clearScreen.addEventListener('click', () => {
    input.value = "";
    clickEffect(clearScreen);
});

delBtn.addEventListener('click', () => {
    input.value = input.value.substring(0, input.value.length - 1);
    clickEffect(delBtn);
});

equalBtn.addEventListener('click', () => {
    input.value = eval(input.value);
    clickEffect(equalBtn);
});