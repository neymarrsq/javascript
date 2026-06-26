const notas = [7, 8, 6, 9];

notas.pop(); 
notas.push(10);

const soma = notas[0] + notas[1] + notas[2];
const media = soma / notas.length;

console.log('notas:', notas);
console.log('média:', media);