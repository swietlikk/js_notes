function sum(a, b){
    return a + b;
}

const result = sum(1, 2);
// console.log(result);
// console.log(sum (1, 2));

// napisz funkcję, która zwraca 'Cześć, Janusz', przy czym
// Janusz to parametr

function greetings(name){
    return 'Cześć, ' + name;
}

// console.log(greetings('Janusz'));

function getDayName(day){
   return ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'][day];
}

// console.log(getDayName(0)) // niedziela

// wylosuj 6 liczb bez powtórzeń z zakresu 1-49
// function drawDigits(quantity){
//     const temp = [];
//
//     while (temp.length < quantity){
//         const digit = Math.floor(Math.random() * 48 + 1);
//         if (!temp.includes(digit)){
//             temp.push(digit)
//         }
//     }
//
//     return temp;
// }
//
// console.log(drawDigits(6))

// fn, do zwracania intersection 2 tablic
// algorytm postępowania

// 1. Stwórz funkcje, która przyjmuje 2 parametry
// 2. Stwórz pustą tablicę, do zapisywania powtarzających się elementów
// 3. Przeliteruj po pierwszej tablicy - for
// 4. Sprawdź w iteracji każdy element, czy jest w drugiej - includes
// 5. Jeżeli jest to dodaj do pustej tablicy - push
// 6. Po iteracji zwróć tablicę z pkt 2

// function arrayIntersection(arr1, arr2){
//     const result = [];
//
//     for (const item of arr1) {
//         if (arr2.includes(item)) {
//             result.push(item);
//         }
//     }
//     return result;
// }

// console.log(arrayIntersection([1, 2, 3, 4], [2, 4, 11]))

// myLord - Witaj mój Panie!, Co jeszcze mogę dla Ciebie zrobić,
// Pięknie dzisiaj wyglądasz!

// 1. Stwórz funkcje, która nie ma args
// 2. Stwórz tablice z tekstami i przypisz do zmiennej
// 3. Zwróć losowy tekst zależny od indeksu z tablicy

function myLord(){
    const sentences = ['Witaj mój Panie!', 'Co jeszcze mogę dla Ciebie zrobić?', 'Pięknie dzisiaj wyglądasz!'];
    return sentences[Math.round(Math.random() * (sentences.length - 1))];
}

console.log(myLord());