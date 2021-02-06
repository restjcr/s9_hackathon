let añoAntiguedad = parseInt(prompt("Año(s) de antigüedad"));

let bono;

if(añoAntiguedad==1){

bono=100;

}

if(añoAntiguedad==2){

bono=200;

}

if(añoAntiguedad==3){

bono=300;

}

if(añoAntiguedad==4){

bono=400;

}

if(añoAntiguedad==5){

bono=500;

}

if(añoAntiguedad>5){

bono=1000;

}

alert(`Le corresponde un bono de ${bono}`);