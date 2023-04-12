

var num= 5;
var nombre="Pedro";
let bandera=true;
console.log(num);
console.log(nombre);
console.log(bandera);

if(5>3){

    // let variables en su scope=ambito
    //var varables globales 
    var edad=50;

    console.log(edad);
}
console.log(edad);

//tipos 
//string
//number
//boolean
//arrays
//objetos
//COERCION
if(5!=="5"){
    console.log("ENTROOO..");
}

const persona={

    cedula:604440666,
    nombre:"PEDRO",
    apellido1:"PEREZ",
    edad:50
}
console.log(persona);

var tieneApellido=persona.hasOwnProperty("apellido2");
console.log(tieneApellido);

console.log(persona.apellido1);

//VALOR INDEFINIDO VA A FALSO
if(persona.apellido2){

    console.log("aPELLUDO 2 ES: "+persona.apellido2);
}else{

    console.log("No tinee apellido 2");
}

//CONCATENAR +, STRING TEMPLATE

const mensaje=`El mensaje es, el nombre de la persona es: ${nombre}, y la edad es: ${edad}`;

console.log(mensaje);


const lista=["rojo","azul","verde", "amarillo"];

//spread
console.log(lista[2]);

lista.forEach((valor,value)=>{
    const mensaje= `El color es: ${valor}, en la posicion:${value}`
    console.log(mensaje);
}
);


lista.map((valor,indice)=>{

    if(valor=="rojo"){
        console.log("SI ES ROJO....")
    }else {
        console.log("ES OTRO COLOR,"+valor)
    }

});

const listaPersonas=[
    {
        cedula:1,
        nombre:"PEDRO",
        apellido1:"PEREZ",
        edad:50
    },
    {
        cedula:2,
        nombre:"MARIA",
        apellido1:"ACOSTA",
        edad:25
    },
    {
        cedula:3,
        nombre:"ADELE",
        apellido1:"PEREZ",
        edad:35
    },
    {
        cedula:4,
        nombre:"LADY",
        apellido1:"GAGA",
        edad:38
    },
    {
        cedula:5,
        nombre:"KATY",
        apellido1:"PERRY",
        edad:32
    }
]


const results= listaPersonas.map((persona, index)=>{

    const nombre= `${persona.nombre} ${persona.apellido1}`;
    return {
        id:index,
        cedula:persona.cedula,
        nombreCompleto:nombre,
        edad: persona.edad
    }
}).filter(x=>x.edad>30);

console.log(...results);

// while(edad>49){

//     edad=15;
// }



function calcular(num1,num2){ 
    console.log(num1+num2); 
    return num1+num2;
}


console.log(calcular(5,10));