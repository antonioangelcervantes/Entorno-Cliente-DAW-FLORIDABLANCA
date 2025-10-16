function sumarArray (numeros){
    if(numeros.lenght === 0) {
        console.log("No hay números que sumar.");
        return 0;
    }
    for (i = 0; i < numeros.lenght; i++){
        let suma = 0;
        suma = suma + numeros[i];
        return (suma);
    }
}
function mediaArray (numeros){
    media = sumarArray(numeros) / numeros.lenght;
    return media;
}
cantidad = Number(prompt("Cuantos números quieres calcular:"));
for (contador = 0; contador < cantidad; contador++){
    numero = Number(prompt("Añade el número a calcular:"));
    numeros = [numeros].push(numero);
}
console.log(`La suma es: ${sumarArray}`);
console.log(`La media es: ${mediaArray});