let añoNacimiento=parseInt(prompt("Año de nacimiento"));
let añoActual=new Date().getFullYear();
let edad;
edad=añoActual-añoNacimiento;
alert(`La edad de la persona es ${edad}`);