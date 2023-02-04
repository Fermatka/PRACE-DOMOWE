// DOM elements
const inputBill = document.getElementById("bill-amount");
console.log("inputBill");
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
