/* WHILE */

/* let mascotas = prompt("Ingresa la cantidad de mascotas que tiene");


while ((mascotas != "no tengo") && (mascotas != "0") && (mascotas != "")) {
    if (mascotas <= 3){
        alert("Te gustan las mascotas");
}   else if (mascotas <= 6) {
    alert("Te gustan MUCHO las mascotas");
}   else {
        alert("AMAS las mascotas y tu sueldo se va en ellas!");
}


    mascotas = prompt("Ingresa la cantidad de mascotas que tiene");
} */


/* FOR */


let numero = parseInt(prompt("Ingresa la cantidad de saludos"));

for(saludo = 0; saludo <=  numero ; saludo++){
    let mensaje = ` #${saludo} Hola! `;
    alert(mensaje);
}