// ej 8
// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS
var geekshubs = [];
for (var i = 0; i <= 100; i++) {
  geekshubs.push(i);
  if (geekshubs[i] % 3 === 0 && geekshubs[i] % 5 === 0){
    geekshubs[i] = 'GEEKSHUBS'
  } else if (geekshubs[i] % 5 === 0){
    geekshubs[i] = 'HUBS'
  } else if (geekshubs[i] % 3 === 0){
    geekshubs[i] = 'GEEKS'
  };
};

for (var i = 0; i < geekshubs.length; i++) {
  console.log(geekshubs[i])
};