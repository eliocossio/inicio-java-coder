/*let presidente = prompt( "ingrese al mejor presidente}")

if (presidente == "menem"){
    console.log("menem es el mejor presidemte");
}else{
    console.log("el no es el mejor presidente");
} 

let NombreUsuario = prompt("ingrese nombre de usuario")

if (NombreUsuario == "" ){
    alert("nombre de usuario incorrcto ");
}else{
    alert("nombre de usuario " + NombreUsuario );
}
*/
let user;
let contraseña;
/* o let usuario,contraseña;*/

for(let i=1;i < 4; i++) {
    user = prompt ("ingrese usuario");
    contraseña = prompt("ingrese contraseña");
    if ((user == "mora") && (contraseña == "mora1234")){
        alert("como va mi amor");
        ;
    } else {
        alert("error en respuesta");
        let codigo = parseInt(prompt("ingresa el numero dependiendo el problema que tengas: \n1-¿olvidaste tu contraseña?\n2-¿olvidaste tu nombre de usuario?\n0-volver a ingresar los datos"));
    while(codigo!=0){
        switch (codigo) {
        case 1:

        alert("se envio un mail de recuperacion");
        break;
        case 2:

        alert("a continuacion se te solicitara unos datos");
        break;
        default:

        alert(" ¡ERROR EN EL CODIGO!");
        break;
}
codigo = parseInt(prompt("ingresa el numero dependiendo el problema que tengas: \n1-¿olvidaste tu contraseña?\n2-¿olvidaste tu nombre de usuario?\n0-volver a ingresar los datos"));
}

    } 

}



/*
let codigo = parse(prompt("ingresa el numero dependiendo el problema que tengas: \n1-¿olvidaste tu contraseña?\n2-¿olvidaste tu nombre de usuario?\n0-volver a ingresar los datos"));
    while(codigo!=0){
        switch (codigo) {
        case 1:

        alert("se envio un mail de recuperacion");
        break;
        case 2:

        alert("a continuacion se te solicitara unos datos");
        break;
        default:

        alert(" ¡ERROR EN EL CODIGO!");
        break;
}
codigo = parseint(prompt("ingresa el numero dependiendo el problema que tengas: \n1-¿olvidaste tu contraseña?\n2-¿olvidaste tu nombre de usuario?\n0-volver a ingresar los datos"));
}
*/

