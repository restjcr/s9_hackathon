let horasTrabajadasDiarias = parseInt(prompt("Horas trabajadas diarias"));
let diasTrabajados = parseInt(prompt("Dias trabajados en la semana"));
let sueldoxHora = parseFloat(prompt("Sueldo por hora"));
let sueldoSemanal;
sueldoSemanal = horasTrabajadasDiarias*sueldoxHora*diasTrabajados;
alert(`El sueldo semanal es ${sueldoSemanal}`);