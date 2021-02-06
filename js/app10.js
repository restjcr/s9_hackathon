let menor;

let persona = {

persona1:{

nombre: "Jose",

edad: 12

},

persona2:{

nombre:"Pablo"

edad: 18

},

persona3:{

nombre:"Flor"

edad: 14

}

};

if(persona.persona1.edad>persona.persona2.edad){

if(persona.persona2.edad>persona.persona3.edad){

menor=persona.persona3;

}else{

menor=persona.persona2;

}

}else{

if(persona.persona1.edad>persona.persona3.edad){

menor=persona.persona3;

}

else{

menor=persona.persona1;

}

}

alert(`La persona con la menor edad es ${menor.nombre} con ${menor.edad} años`);