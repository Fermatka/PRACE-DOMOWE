// DOM elements
// const inputBill = document.getElementById("bill-amount");

// const inputPeople = document.getElementById("people-count");
// const inputCustom = document.querySelector(".custom-percentage");
// const btn_5 = document.querySelector(".btn_5");
// const btn_10 = document.querySelector(".btn_10");
// const btn_15 = document.querySelector(".btn_15");
// const btnReset = document.querySelector(".reset-btn");
// const showTip = document.querySelector(".show-tip");
// const showTotal = document.querySelector(".show-total");
// const showWarning = document.querySelector("label span");

// // deklaracja zmiennych
// let billAmount, numPeople, customPercent, tipTotal, tipPerson, totalPerson;

//funkcje

// obsługa buttonów z %
//funkcja, która obsłuży kliknięcie batona z %

let currentPercent = 0.05;
let tip = "0";

function visualiseButton(percent) {
  document.getElementById("b5").style.backgroundColor = "blue";

  document.getElementById("b10").style.backgroundColor = "blue";

  document.getElementById("b15").style.backgroundColor = "blue";

  if (percent === 0.05) {
    document.getElementById("b5").style.backgroundColor = "#500";
  } else if (percent === 0.1) {
    document.getElementById("b10").style.backgroundColor = "#500";
  } else {
    document.getElementById("b15").style.backgroundColor = "#500";
  }
}

function setCurrentPercent5() {
  currentPercent = 0.05;
  visualiseButton(currentPercent);
}

function setCurrentPercent10() {
  currentPercent = 0.1;
  visualiseButton(currentPercent);
}

function setCurrentPercent15() {
  currentPercent = 0.15;
  visualiseButton(currentPercent);
}

function reset() {
  document.getElementById("bill-amount").value = "0";
  document.getElementById("people-count").value = "0";
  document.querySelector(".show-tip").innerText = "$0.00";
  document.querySelector(".show-total").innerText = "$0.00";
}

function calculate() {
  console.log("Hello");
  let tipPercent = currentPercent;
  let tip = tipPercent * document.getElementById("bill-amount").value;
  console.log("tip");

  let tipPerPerson = tip / document.getElementById("people-count").value;
  console.log(tipPerPerson);

  let BillPerPerson =
    document.getElementById("bill-amount").value /
    document.getElementById("people-count").value;

  console.log(BillPerPerson);

  document.querySelector(".show-tip").innerText = "$" + tipPerPerson;
  document.querySelector(".show-total").innerText = "$" + BillPerPerson;
}

document.querySelector("#b5").addEventListener("click", setCurrentPercent5);

document.querySelector("#b10").addEventListener("click", setCurrentPercent10);

document.querySelector("#b15").addEventListener("click", setCurrentPercent15);
document.querySelector(".reset-btn").addEventListener("click", reset);
document.querySelector(".calculate-btn").addEventListener("click", calculate);

visualiseButton(currentPercent);
reset();

//obsługa sytuacji nietypowych, komentarze, css, , disabled buttony, format wyświetlania liczb,-2 miejsca po przecinku
