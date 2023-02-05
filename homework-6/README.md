

W zadaniu skupcie się na poprawnej semantyce aplikacji i poprawnych stylach, ale aplikacja nie musi być 1 do 1 zgodna z designem - im bliżej tym lepiej.
Aplikacja powinna być responsywna.

## Zadanie

Stwórz, bazując na załączonych plikach z designem, kalkulator napiwków, w którym podajemy kwotę rachunku, następnie wybieramy jedną spośród kilku opcji określająychc jaki procent całości kwoty na stanowić napiwek oraz podajemy ilość osób, na których rachunek będzie podzielony. Po kliknięciu w przycisk zostaną obliczone wartości w podusmowaniu. W oknie wyświetlamy podsumowanie, w którym będzie informacja o tym ile napiwku przypada na jedną osobę i ile w całości przypada na osobę do zapłacenia (czyli suma rachunku podzielonego na ilość osoób i napiwku podzielonego na ilość osób). Np gdy rachunek wysoni 100zł i napiwek to 10% (10zł) to przy dwóch osobach do zapłacenia będzie dla każdej 50zł (100zł/2) z rachunku i 5zł z napiwku (10zł/2).

Dodatkowo:

1. Przycisk 'Calculate' powinien być niedostępny (atrybut disabled) do momentu, aż nie podany kwoty rachunku, liczby osób (brak wybrania napiwku oznacza 0% napiwku).
2. Przycisk 'Reset' Będzie niedostępny dopóki przynajmniej jedna z trzech rzeczy nie jest podana - kwota rachunku, wielkość napiwku lub liczba osób. Zaznaczenie przynajmniej jednej z tych rzeczy sprawia, że możliwe jest kliknięcie przycisku 'reset' - wówczas kwota rachunku zamieniana jest na '0', wielkość napiwku na '0' oraz liczba osób również na '0'.
3. Zaznaczona kwota napiwku powinna być w jakiś sposób wyróżiona (np. dodatkowa klasa która zmienia kolor tła na jaśniejszy).

## Termin

Termin oddania zadania przypada na 08.02.2023.

## Punktacja

Za zadanie można zdobyć max 10 punktów:

- Poprawna semantyka - 2 pkt
- Poprawne stylowanie, responsywnoć - 2 pkt
- Poprawny JS, poprawna logika, czystość kodu - 6 pkt
