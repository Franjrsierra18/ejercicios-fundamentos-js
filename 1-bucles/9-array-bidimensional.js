
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

var matriz = [
    [],
    [],
    []
];

for (var i = 0; i < matriz.length; i++) {
  var filaCubo = matriz[i];
  filaCubo.push(i);
  filaCubo.push(i);
  filaCubo.push(i);
  for (var r = 0; r < filaCubo.length; r++) {
    filaCubo[r] += r.toString();
  };
};
console.log(matriz);

