let word = 'tryber';
let drow = [];
let drowString = ""

for (let index = 0; index < word.length; index +=1){
  drow.push(word[word.length-index -1]); 
}

drowString = drow.join('');

console.log(drowString);



// let number = 10;
// let fatorial = 1;

// for (let index = 0; index < 10; index += 1 ) {
//   fatorial = fatorial * (number - index);
// }

// console.log(fatorial);