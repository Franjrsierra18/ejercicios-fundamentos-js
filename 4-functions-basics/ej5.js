// crea la función cuentaCaracteres
// debe recibir un tipo string y devolver un number con el numero de carácteres

// Si la función no recibe un dato tipo string debe
// devolver el string 'Debo ser ejecutada con un string'

// Ha de pasar los test adjuntados.

let cuentaCaracteres = (texto) => {
    // Aquí tu código.  Desde aquí:
    console.log(typeof texto);
    // var newstr = texto.length;  
    if (texto === ""){
      return texto.length;
    } else if (typeof(texto) == Number){
      return texto.length;
    } else if (typeof(texto) == String){
      return texto.length;
    } else if (texto == true){
      return 'Debo ser ejecutada con un string';
    } else if (texto === undefined){
      return 'Debo ser ejecutada con un string';
    };
    return texto.length;
    // Hasta aquí.
}


let test = require('../test.js');
//  test(functionTotest, [argumento1,argumento2, etc..],  expectedOutput) 
// comprueba si: cuentaCaracteres('juan') === 4
test(cuentaCaracteres, ['juan'], 4);
test(cuentaCaracteres, ['Hola'], 4);
test(cuentaCaracteres, ['123456789'], 9);
test(cuentaCaracteres, [''], 0);
test(cuentaCaracteres, [true], 'Debo ser ejecutada con un string');
test(cuentaCaracteres, [], 'Debo ser ejecutada con un string');