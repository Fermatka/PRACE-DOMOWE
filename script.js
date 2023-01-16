console.log("test");

// Zadanie 1 - 1 punkt
// Stwórz funkcję 'add', która przyjmuje 2 parametry - 'a' i 'b' oraz zwraca ich sumę. Funkcja powinna sprawdzić, czy oba parametry są typu 'number' (podpowiedź: operator typeof)
console.log("ZADANIE 1");
// tego chyba nie musi tu być? :
// let a = 6;
// let b = 7;

console.log(typeof a);
console.log(typeof b);

function add(a, b) {
  return a + b;
}

console.log(add(2, 5));

// Zadanie 2 - 3 punkty
// Wykonaj funkcje odejmującą, mnożącą oraz dzielącą 2 wartości przekazane w parametrze (3 funkcje).

console.log("ZADANIE 2");
// SUMA
let c = 6;
let d = 2;
function sum(c, d) {
  if (typeof c == "number" && typeof d == "number") {
    console.log(`${c} & ${d} is a number`);
    return c + d;
  } else {
    console.log("c or d is not a number- cannon execute the function ");
  }
}
console.log(sum(6, 2));
// RÓŻNICA
function diff(a, b) {
  //    tu jeszcze muszę dopisać to z typeOf
  return a - b;
}
console.log(diff(5, 2));

// DZIELENIE

function division(e, f) {
  if (typeof e == "number" && typeof f == "number" && f > 0) {
    console.log(
      `${e} & ${f} is a number and possible operation - divider is greater than zero`
    );
    return e / f;
  } else {
    console.log(
      "c or d is not a number or divider = 0 -> cannot execute the function "
    );
  }
}
console.log(division(10, 0));

// Wynik arytmetyczny powinien wyświetlić się na konsoli Jeżeli któryś z zadanych parametrów nie będzię liczbą, funkcja powinna zwrócić napis: "Niepoprawny parametr". Jeżeli funkcja zostanie uruchomiona tylko z jednym parametrem, powinien zostać on wyświetlony jako wynik działania funkcji.

// Zadanie 3 - 3 punkty
// Stwórz funkcje która przyjmie 3 argument (a,b,c). Na podstawie wprowadzonych danych, wypisz w konsoli komunikat: 'Największa liczba to: liczba'
console.log("ZADANIE 3");
function theBiggestNumber(a, b, c) {
  if (a > b && a > c) {
    console.log(`${a} is the biggest number`);
  } else if (b > a && b > c) {
    console.log(`${b} is the biggest number`);
  } else console.log(`${c} is the biggest number`);
}
console.log(theBiggestNumber(9, 2, 3));
// Zadanie 4 - 3 punkty
// Stwórz funkcje która przyjmie 3 argumenty (age,height, weight). Na podstawie wprowadzonych danych, Oblicz i wyświelt w konsoli BMI dna podanych danych. Nalezy sprawdzić czy nasze wprowadzne dane są liczbami, jeśli jakakolwiek z nich nie jest nalezy wyświetlić komunikat: 'Błędne dane ${dane}'

// Uwagi
// Kod piszemy camelCasem i tylko po angielsku
