



//EXERCICE 2
const subject2Array = [3, 7, 8, 3, 6, 1];
const roadTwo = [1, 4, 5, 8];


const exo2 = (array) => {
    let count = 1;
    for (let i = 0; i < array.length - 2; i++) {
        let sun = true;
        for (let j = i + 1; j < array.length - i; j++) {
            if (array[i] <= array[j]) {
                sun = false;
            };
        };
        sun ? count++ : null;
    };
    return count;
};

console.log(exo2(subject2Array));


// EXERCICE 4

const roadOne = [3, 7, 8, 3, 6, 1]; //array.length = 6



const subject2bis = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        let newArray = Object.values(array)
        let workArray = newArray.splice(i, array.length);
        let max = Math.max(...workArray);
        if (array[i] >= max) {
            count++;
        };
    };
    return count;

};
console.log(subject2bis(roadOne))
console.log(subject2bis(roadTwo))