// Take an array of numbers and make them strings
// Example input [2, 5, 100] ex output: ["2", "5", "100"]

function stringItUp(numbers){
    // your code here
    let arrStrings = [];
    if (numbers.length > 0) {
        for (const num of numbers) {
            arrStrings.push(num + '');
        }
    }

    return arrStrings;
}




let test = require('../test.js');

test(stringItUp, [[2, 5, 100]], ["2", "5", "100"]);
test(stringItUp, [[]], []);
test(stringItUp, [[1]], ["1"]);