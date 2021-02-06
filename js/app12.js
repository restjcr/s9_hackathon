let salarios = [];

let salarioActual=1500;

const años=6;

const incremento=0.1;

for(let i=0;i<6;i++){

salarioActual=salarioActual + (salarioActual*incremento);

salarios[i]=salarioActual;

}

console.log(`Salario luego de un año: ${salarios[0]}`);

console.log(`Salario luego de dos años: ${salarios[1]}`);

console.log(`Salario luego de tres años: ${salarios[2]}`);

console.log(`Salario luego de cuatro años: ${salarios[3]}`);

console.log(`Salario luego de cinco años: ${salarios[4]}`);

console.log(`Salario luego de seis años: ${salarios[5]}`);