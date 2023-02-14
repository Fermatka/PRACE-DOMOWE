# Zadanie 7 - JS - praca z API

## Treść zadania
### Zadanie 1
1. Wykorzystując zewnętrzne api: `https://jsonplaceholder.typicode.com/` oraz endpoint: `https://jsonplaceholder.typicode.com/users`, pobierz listę użytkowników.
2. Wyświetl w ramach dokumentu `html` pobraną listę użytkowników. Dla każdego użytkownika powinieny zostać wyświetlone informacje: 
   1. imię i nazwisko
   2. adres e-mail
   3. adres zamieszania (ulica, miasto)

### Zadanie 2
1. Utwórz formularz służący do dodawania nowych użytkowników.
2. Formularz powinien zawierać pola: `Imię i nazwisko`, `Adres email` oraz `Adres zamieszkania` (mogą być oddzielne pola na ulicę oraz miasto).
3. Po wysłaniu formularza, nowy użytkownik powinien wyświetlić się w dokumencie `html`.
4. Użytkownicy dodani przez użytkownika, powinni być wyświetleni na tej samej liście, co użytkownicy pobrani z API.
5. Użytkownicy dodanie przez użytkownika powinni wyświetlać się na górze listy.

### Zadanie dodatkowe 1
1. Dodaj obsługę local storage dla użytkowników dodanych poprzez formularz. 
2. Po odświeżeniu strony, użytkownicy dodani za pomocą formularza, powinni również wyświetlać się użytkownikowi.

### Zadanie dodatkowe 2
1. Dodaj obsługę statusów ładowania oraz błędu.
2. Podczas ładowania danych z zewnętrznego API, użytkownikowi powinien wyświetlić się `loader` lub tekstowa informacja informująca o ładowaniu danych.
3. Jeśli pobieranie danych z zewnętrznego API się nie powiedzie, użytkownik powinien otrzymać komunikat tekstowy.
4. W trakcie ładowania danych z zewnętrznego API - formularz dodawania nowych użytkowników powinien być zablokowany lub niewidoczny.

## Założenia
1. Nazwy funkcji, pola obiektów, nazwy zmiennych i stałych powinny być zapisane po angielsku.
2. Wykorzystaj `fetch` api przeglądarki.
3. Zarówno formularz jak i pobrana lista użytkowników powinna znajdować się w jednym dokumencie `html`.

## Punktacja
Łącznie możesz uzyskać 10pkt:
1. Zadanie 1 - 5pkt
2. Zadanie 2 - 5pkt

Termin oddania 23.02.2023