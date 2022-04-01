// Make an array of strings with the names 
// of people who can access to the party ( >= 18 years old)

//Example input [{ name: 'David', age: 22}, {name: 'Juan', age: 17}]
//Example output ['David']

function makeStringsWhoCanAccess(persons){
    // your code here
    let arrNames = [];
    if (persons.length > 0) {
        for (const person of persons) {
            if (person.age >= 18) {
                arrNames.push(person.name);
            }
        }
    }

    return arrNames;
}

let test = require('../test.js');

test(makeStringsWhoCanAccess, [[]], []);
test(makeStringsWhoCanAccess, [[{name: 'Juan', age: 18}, {name: 'Paco', age: 2}, {name: 'Fran', age: 19}]], ['Juan', 'Fran']);
test(makeStringsWhoCanAccess, [[{name:  'David', age: 10}]], []);

