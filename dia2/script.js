// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for(let index = 0 soma = 0; index < numbers.length; index++){
//   console.log(numbers[index]);
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0
// let med;

// for(let index = 0 ; index < numbers.length; index += 1){
//   sum = sum + numbers[index];  
// }

// med = sum / numbers.length;


// // console.log('média = ' + med);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0
// let med;

// for(let index = 0 ; index < numbers.length; index += 1){
//   sum = sum + numbers[index];  
// }

// med = sum / numbers.length;

// if (med > 20) {
//   console.log("valor de média maior que 20");
// } else {
//   console.log("Valor de média igual ou menor que 20");
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let biggest = 0;

// for (let index = 0; index < numbers.length; index += 1){
//   if (numbers[index] > biggest) {
//     biggest = numbers[index];
//   }
// }

// console.log('O maior número é: '+ biggest);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let countOdd = 0

// for (let index = 0; index < numbers.length; index++) {
//   if (numbers[index] % 2 === 1){
//     countOdd = countOdd + 1;
//   }
  
// }

// if (countOdd === 0){
//   console.log("não tem numero ímpar");
// } else {
//   console.log('existem '+ countOdd + ' números ímpares');
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let smaller = numbers[0];

// for (let index = 0; index < numbers.length; index += 1){
//   if (numbers[index] <= smaller) {
//     smaller = numbers[index];
//   }
// }

// console.log('O menor número é: '+ smaller);

// let array = [];

// for (index = 1; index < 26; index += 1){
//   array.push(index / 2);
// }

// console.log(array);

// let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 
// for (let index = 1; index < array.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (array[index] < array[secondIndex]) {
//       let position = array[index];
//       array[index] = array[secondIndex];
//       array[secondIndex] = position;
//     }
//   }
// }

// console.log(array);

//let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < array.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (array[index] > array[secondIndex]) {
//       let position = array[index];
//       array[index] = array[secondIndex];
//       array[secondIndex] = position;
//     }
//   }
// }

// console.log(array);

let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = []

for (let index = 0; index < array.length; index++) {
  if (index < array.length - 1){
    newArray.push(array[index] * array[index + 1]);
  } else {
    newArray.push(array[index] * 2);
  }
  
}

console.log(newArray);

