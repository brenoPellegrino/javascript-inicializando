let array = ['java', 'javascript', 'python', 'html', 'css'];
let larger = array[0];
let smaller = array[0];

// console.log(array[0].length);

for (let index = 1; index < array.length; index++) {
  if (array[index].length >= larger.length){
    larger = array[index]
  } else if (array[index].length <= smaller.length){
    smaller = array[index];
  }
}

console.log('a maior string é ' + larger);
console.log('a menor string é ' + smaller);


// let word = 'tryber';
// let drow = [];
// let drowString = ""

// for (let index = 0; index < word.length; index +=1){
//   drow.push(word[word.length-index -1]); 
// }

// drowString = drow.join('');

// console.log(drowString);



// let number = 10;
// let fatorial = 1;

// for (let index = 0; index < 10; index += 1 ) {
//   fatorial = fatorial * (number - index);
// }

// console.log(fatorial);