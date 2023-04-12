function validar(){


    let input= document.getElementById('nombre').value;
   
    if(input===""){
        // document.write('Falta el nombre');
        alert('Falta el nombre');
        document.getElementById('nombre').focus();
        document.getElementById('nombre').style.backgroundColor="red";
        return false;
    }

    input= document.getElementById('apellido1').value;

    if(input===""){
        // document.write('Falta el nombre');
        alert('Falta el Apellido 1');
        document.getElementById('apellido1').focus();
        document.getElementById('apellido1').style.backgroundColor="red";
        return false;
    }

    input= document.getElementById('apellido2').value;

    if(input===""){
        // document.write('Falta el nombre');
        alert('Falta el Apellido 2');
        document.getElementById('apellido2').focus();
        document.getElementById('apellido2').style.backgroundColor="red";
        return false;
    }

    input= document.getElementById('edad').value;

    if(input=="" ){
        // document.write('Falta el nombre');
        alert('Falta la edad');
        document.getElementById('edad').focus();
        document.getElementById('edad').style.backgroundColor="red";
        return false;
    }

    if(isNaN(input)){
        // document.write('Falta el nombre');
        alert('La edad debe ser valor numerico');
        document.getElementById('edad').focus();
        document.getElementById('edad').style.backgroundColor="red";
        return false;
    }

    input= document.getElementById('color').selectedIndex;

    if(input===0){
        alert('Debe escoger un color favorito');
        document.getElementById('color').focus();
        document.getElementById('color').style.backgroundColor="red";
        return false;
    }

    input= document.getElementById('correo').value;
    if( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input)) ) {
        alert('No tiene formato de correo.');
        document.getElementById('correo').focus();
        document.getElementById('correo').style.backgroundColor="red";
        return false;
    }

    return true;
}


function mensaje(msj){

    alert(msj);
}

function calcular(num1, num2){
    return num1+num2;
}


//arrow function
// validar =>{
//     alert('ff');
// }