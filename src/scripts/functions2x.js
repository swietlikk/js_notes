// function expression -> przypisanie deklaracji fn do zmiennej
const doSmth = () => {};
const doSmth1 = function (){};
const doSmth2 = function name(){}; // nie rób tak

// wariancje zapisu

// parametry
const x = () => {}
const x1 = a => {} // nie rób tak
const x2 = (a, b) => {}

// ciało funkcji

const x3 = () => {}
const x4 = () => 42 // implicit return

// funkcja max, która zwraca największy podany argument
// const max = (...digits) => {
//     let highest = digits[0];
//
//     for (const digit of digits.slice(1)){
//         if (digit > highest){
//             highest = digit;
//         }
//     }
//
//     return highest;
// }
//
// const max = (...digits) => digits.sort((a, b) => a - b).at(-1);
//
//
// console.log(max(1, 2, 3, 4, 88, 3, 5, 45));


// przyjmij obiekt z imieniem i wiekiem i zwróc nowy obiekt, w którym będzie
// jeszcze klucz active
// const changeStatus = ({name, age}) => ({name, age, status: 'active'});
const changeStatus = (person) => ({...person, status: 'active'});


const user = {name: "Janusz", age: 34}
console.log(changeStatus(user));
// {name: "Janusz", age: 34, status: 'active'}