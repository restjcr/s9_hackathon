// const salarioInicial=1500;
const incremento=0.1;
const años=6;
let salarioActual=1500;
let salarios = [];

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


