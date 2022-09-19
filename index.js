let notas = prompt("Ingrese SIGUIENTE si desea promediar las notas, sino ingrese NO para terminar");


function promedio(ingresaNotas,ingresaNotas2,ingresaNotas3){
    let suma = ingresaNotas + ingresaNotas2 + ingresaNotas3;
    let promedioDeNotas = suma / 3;
    return promedioDeNotas
}

function felicitaciones(promedioDeNotas){
    if( promedioDeNotas >= 7){
        alert(`Felicitaciones APROBASTE, tu promedio fue de ${promedioDeNotas}`)
    }else{
        alert(`Desaprobado, pero podes recuperarlo!`);
}
}


while (notas != "NO"){  
    if((notas != "SIGUIENTE") && (notas != "NO")){
        alert("No ingresaste una respuesta valida")
        notas = number(prompt("Ingrese calcular si desea promediar las notas, sino ingrese cancelar"));
    }else{
        ingresaNotas = Number(prompt("Ingrese la nota del 1er trimestre del alumno"));
        ingresaNotas2 = Number(prompt("Ingrese la nota del 2do trimestre del alumno"));
        ingresaNotas3 = Number(prompt("Ingrese la nota del 3er trimestre del alumno"));
        let promedioDeNotas = promedio(ingresaNotas, ingresaNotas2, ingresaNotas3)
        felicitaciones(promedioDeNotas)
        notas = number(prompt("Ingrese calcular si desea promediar las notas, sino ingrese cancelar"));

}
}















