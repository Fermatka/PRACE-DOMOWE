// DOM elements
const inputBill = document.getElementById("bill-amount");

const inputPeople = document.getElementById("people-count");
const inputCustom = document.querySelector(".custom-percentage");
const btn_5 = document.querySelector(".btn_5");
const btn_10 = document.querySelector(".btn_10");
const btn_15 = document.querySelector(".btn_15");
const btnReset = document.querySelector(".reset-btn");
const showTip = document.querySelector(".show-tip");
const showTotal = document.querySelector(".show-total");
const showWarning = document.querySelector("label span");

// deklaracja zmiennych
let billAmount, numPeople, customPercent, tipTotal, tipPerson, totalPerson;

//funkcje
//reset

// obsługa buttonów z %
//funkcja, która obsłuży kliknięcie batona z %

let currentPercent = 0.05;

function setCurrentPercent5() {}

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
//żadna- to nic

visualiseButton(currentPercent);

// function selectedTip () {

//     let tipValue = "0";
//     if //klinę na 5% to()
//     ()tipValue =document.querySelector(".btn_5").value;

//     if //klinę na 10% to()
//     ()tipValue =document.querySelector(".btn_10").value;

//     if //klinę na 15% to()
//     ()tipValue =document.querySelector(".btn_15").value;

// }
let tip = "0";
// reset
document.getElementById("bill-amount");
function reset() {
  document.getElementById("bill-amount").value = "0";
  document.getElementById("people-count").value = "0";
  document.querySelector(".show-tip").innerText = "$0.00";
  document.querySelector(".show-total").innerText = "$0.00";
}

document.querySelector(".reset-btn").addEventListener("click", reset);

//calculate
function calculate() {
  console.log("Hello");
  let tipPercent = 0.05;
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

document.querySelector(".calculate-btn").addEventListener("click", calculate);
