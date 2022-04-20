const fs = require('fs');
const list = process.argv[2];
const data = fs.readFileSync('list.txt', 'utf8');
const listArray = data.split(' ').map(function(item){
    return parseInt(item, 10);
});

// EXERCICE 1

/*
const exo1 = (array, k) => {
    for(let i=0; i < array.length; i++){
      for(let j=0; j < array.length; j++){
        if(array[i] + array[j] === k)
          return true;
      }
    }
    return false;
  }

  const subject1Array = listArray
  const k = 12;
 
  console.log(exo1(subject1Array, k));

*/
  // EXERCICE 3

  const arrayT = [10, 15, 3, 7];

const exo2 = (array, k) => {
    for (let i = 0; i < array.length; i++) {
        let sum = k - array[i];
        if (array.includes(sum) === true) {
            return true
        } else {
            i++;
        };
    };
    return false
};


const subject1Array = arrayT
const k = 13;

console.log(exo2(arrayT, k));