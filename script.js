console.log("test");

// Zadanie 1 - 1 punkt
// Stwórz funkcję 'add', która przyjmuje 2 parametry - 'a' i 'b' oraz zwraca ich sumę. Funkcja powinna sprawdzić, czy oba parametry są typu 'number' (podpowiedź: operator typeof)
console.log("ZADANIE 1");

function add(a, b) {
  if (typeof a == "number" && typeof b == "number") {
    console.log(`${a} & ${b} is a number`);
    return a + b;
  } else {
    console.log(`${a} or ${b} is not a number- cannon execute the function`);
    return 0;
  }
}
console.log(`Suma tych dwóch liczb to: ${sum(2, 5)}`);

// Zadanie 2 - 3 punkty
// Wykonaj funkcje odejmującą, mnożącą oraz dzielącą 2 wartości przekazane w parametrze (3 funkcje).

console.log("ZADANIE 2");
// SUMA

function sum(a, b) {
  if (typeof a == "number" && typeof b == "number") {
    console.log(`${a} & ${b} is a number`);
    return a + b;
  } else {
    console.log("a or b is not a number- cannon execute the function ");
    return 0;
  }
}
console.log(sum(6, 2));

// RÓŻNICA
function diff(a, b) {
  if (typeof a == "number" && typeof b == "number") {
    console.log(`${a} & ${b} is a number`);
    return a - b;
  } else {
    console.log(`${a} or ${b} is not a number- cannon execute the function`);
    return 0;
  }
}
console.log(diff(5, 2));

// DZIELENIE

function division(a, b) {
  if (typeof a == "number" && typeof b == "number" && b != 0) {
    console.log(
      `${a} & ${b} is a number and possible operation - divider is greater than zero`
    );
    return a / b;
  } else {
    console.log(
      `${a} or ${b} is not a number or divider = 0 -> cannot execute the function`
    );
  }
  return 0;
}

console.log(division(10, 0));

// drugie rozwiązanie- trzy operacje za pomocą jednej funkcji
console.log("Zadanie2- drugie rozwiązanie");
function operation(a, b, c) {
  if (typeof a == "number" && typeof b == "number" && c == "sum") {
    console.log(`${a} & ${b} is a number`);
    return a + b;
  } else if (typeof a == "number" && typeof b == "number" && c == "diff") {
    console.log(`${a} & ${b} is a number`);
    return a - b;
  } else if (typeof a == "number" && typeof b == "number" && c == "div") {
    console.log(`${a} & ${b} is a number`);
    return a / b;
  } else return false;
}

console.log(`Sum of a and b is: ${operation(2, 3, "sum")}.`);
console.log(`Difference a and b is: ${operation(5, 1, "diff")}.`);
console.log(`Division of a and b is:${operation(10, 2, "div")}.`);

// Wynik arytmetyczny powinien wyświetlić się na konsoli Jeżeli któryś z zadanych parametrów nie będzię liczbą, funkcja powinna zwrócić napis: "Niepoprawny parametr". Jeżeli funkcja zostanie uruchomiona tylko z jednym parametrem, powinien zostać on wyświetlony jako wynik działania funkcji.

// Zadanie 3 - 3 punkty
// Stwórz funkcje która przyjmie 3 argument (a,b,c). Na podstawie wprowadzonych danych, wypisz w konsoli komunikat: 'Największa liczba to: liczba'
console.log("ZADANIE 3");
function theBiggestNumber(a, b, c) {
  if (a > b && a > c) {
    console.log(`${a} is the biggest number`);
  } else if (b > a && b > c) {
    console.log(`${b} is the biggest number`);
  } else {
    console.log(`${c} is the biggest number`);
  }
}
console.log(theBiggestNumber(9, 2, 3));

// Zadanie 4 - 3 punkty
// Stwórz funkcje która przyjmie 3 argumenty (age,height, weight). Na podstawie wprowadzonych danych, Oblicz i wyświelt w konsoli BMI dna podanych danych. Nalezy sprawdzić czy nasze wprowadzne dane są liczbami, jeśli jakakolwiek z nich nie jest nalezy wyświetlić komunikat: 'Błędne dane ${dane}'

// BMI obliczamy dzieląc masę ciała (w kilogramach) przez wzrost do kwadratu (w metrach).
function BMI(age, height, weight) {
  if (typeof age != "number") {
    console.log(`Bledne dane (age): ${age}`);
  } else if (typeof height != "number") {
    console.log(`Bledne dane (height): ${height}`);
  } else if (typeof weight != "number") {
    console.log(`Bledne dane (weight): ${weight}`);
  } else {
    return weight / height ** 2;
  }
}

console.log(BMI(2, 2, 40));
// co powinna zwrócić funkcja przy "nagatywnym" rozliczeniu, nie ma return? "błąd"??

// Uwagi
// Kod piszemy camelCasem i tylko po angielsku
