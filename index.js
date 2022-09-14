
alert("Ingresa las notas de los estudiantes de este año y vamos a sacar el promedio y ver si aprobaron!");

let promedioCalculo 
let suma 
let ingresaNotas 
let ingresaNotas2 
let ingresaNotas3 

function notas(){
ingresaNotas = Number(prompt("Ingrese la nota del 1er trimestre del alumno"));
ingresaNotas2 = Number(prompt("Ingrese la nota del 2do trimestre del alumno"));
ingresaNotas3 = Number(prompt("Ingrese la nota del 3er trimestre del alumno"));

while ((ingresaNotas == isNaN) && (ingresaNotas2 == isNaN) && (ingresaNotas3 == isNaN)){  
alert("Ingresa una nota")
}

}

function promedio(ingresaNotas,ingresaNotas2,ingresaNotas3){
    suma = ingresaNotas + ingresaNotas2 + ingresaNotas3;
    promedioCalculo = suma / 3;
}

function felicitaciones(){
    if( promedio >= 7){
        alert("Felicitaciones APROBASTE")
    }else{
        alert("Desaprobado, pero podes recuperarlo!");
}
}

notas()
promedio()
felicitaciones()

