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
// Wynik arytmetyczny powinien wyświetlić się na konsoli Jeżeli któryś z zadanych parametrów nie będzię liczbą, funkcja powinna zwrócić napis: "Niepoprawny parametr". Jeżeli funkcja zostanie uruchomiona tylko z jednym parametrem, powinien zostać on wyświetlony jako wynik działania funkcji.

console.log("ZADANIE 2");
// SUMA
console.log("suma");
function sum(a, b) {
  if (b == undefined) {
    console.log(a);
    // return `Parametr b is undefined`; nie było w treści zadania napisane, ze ma być zwrócony jakiś komunikat, ale moim zdaniem dla jasności wyniku powinien taki komunikat być.
  } else if (typeof a != "number" || typeof b != "number") {
    return `Uncorrect parametr`;
  } else {
    console.log(`sum of ${a} and ${b} is: ${a + b}`);
    // return `both parametrs are numbers and defined- it's possible to execute the function`;  nie było w treści zadania napisane, ze ma być zwrócony jakiś komunikat, ale moim zdaniem dla jasności wyniku powinien taki komunikat być.
  }
}
console.log(sum(5, 7));

// RÓŻNICA
console.log("różnica");
function diff(a, b) {
  if (b == undefined) {
    console.log(a);
    // return `Parametr b is undefined`; nie było w treści zadania napisane, ze ma być zwrócony jakiś komunikat, ale moim zdaniem dla jasności wyniku powinien taki komunikat być.
  } else if (typeof a != "number" || typeof b != "number") {
    return `Uncorrect parametr`;
  } else {
    console.log(`diff of ${a} and ${b} is: ${a - b}`);
    // return `both parametrs are numbers and defined- it's possible to execute the function`;  nie było w treści zadania napisane, ze ma być zwrócony jakiś komunikat, ale moim zdaniem dla jasności wyniku powinien taki komunikat być.
  }
}

console.log(diff(10, 2));

// DZIELENIE

console.log("dzielenie");
function div(a, b) {
  if (b == undefined) {
    console.log(a);
    // return `Parametr b is undefined`; nie było w treści zadania napisane, ze ma być zwrócony jakiś komunikat, ale moim zdaniem dla jasności wyniku powinien taki komunikat być.
  } else if (typeof a != "number" || typeof b != "number" || b == 0) {
    return `Uncorrect parametr`;
  } else {
    console.log(`div of ${a} and ${b} is: ${a / b}`);
    // return `both parametrs are numbers and defined- it's possible to execute the function`;  nie było w treści zadania napisane, ze ma być zwrócony jakiś komunikat, ale moim zdaniem dla jasności wyniku powinien taki komunikat być.
  }
}

console.log(div(10, 0));

// drugie rozwiązanie- trzy operacje za pomocą jednej funkcji
console.log("Zadanie2- drugie rozwiązanie");
function operation(a, b, c) {
  if (b == undefined) {
    console.log(a);
    // return `Parametr b is undefined`; nie było w treści zadania napisane, ze ma być zwrócony jakiś komunikat, ale moim zdaniem dla jasności wyniku powinien taki komunikat być.
  } else if (typeof a != "number" || typeof b != "number" || b == 0) {
    return `Uncorrect parametr`;
  } else if (c == "sum") {
    console.log(`sum of ${a} and ${b} is: ${a + b}`);
  } else if (c == "diff") {
    console.log(`diff of ${a} and ${b} is: ${a - b}`);
  } else if (c == "div") {
    console.log(`div of ${a} and ${b} is: ${a / b}`);
  } else return false;
}

console.log(operation(2, 3, "sum"));
console.log(operation(5, 1, "diff"));
console.log(operation(10, 2, "div"));

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
