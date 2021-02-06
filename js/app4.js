let lado1 = parseFloat(prompt("Lado1"));
let lado2 = parseFloat(prompt("Lado2"));
let lado3 = parseFloat(prompt("Lado3"));
let sp = (lado1+lado2+lado3)/2;
let area = Math.sqrt(sp*(sp-lado1)*(sp-lado2)*(sp-lado3));
alert(`El area es ${area}`);