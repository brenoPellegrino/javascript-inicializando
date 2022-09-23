let maiorPrimo = 0;

function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}


for(let index = 0; index <=50; index++){
  if (test_prime(index) === true && index > 3){
    maiorPrimo = index;
  }
}

console.log(maiorPrimo);







// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let larger = array[0];
// let smaller = array[0];

// // console.log(array[0].length);

// for (let index = 1; index < array.length; index++) {
//   if (array[index].length >= larger.length){
//     larger = array[index]
//   } else if (array[index].length <= smaller.length){
//     smaller = array[index];
//   }
// }

// console.log('a maior string é ' + larger);
// console.log('a menor string é ' + smaller);


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