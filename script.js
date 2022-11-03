
function genMonticuloMinimo(Arreglo, valor) {

    //Comprueba si el array está vacío y que nunca se ha colocado nada en el índice 0.   
    if (Arreglo.length == 0) { Arreglo.push(undefined); }

    //Empuja el valor nuevo en el array.
    Arreglo.push(valor)

    let indice = Arreglo.length - 1;
    let indicepadre = Math.trunc(indice / 2);

    while (Arreglo[indicepadre] > Arreglo[indice]) {
        Arreglo[indice] = Arreglo[indicepadre];
        Arreglo[indicepadre] = valor;
        indice = indicepadre;
        indicepadre = Math.trunc(indice / 2);
    }

    return Arreglo;
}

function convertirMontMin(Arreglo) {

    let myArr = [];
    //Comprueba si el array está vacío y que nunca se ha colocado nada en el índice 0.   
    if (Arreglo.length == 0) { Arreglo.push(undefined); return; }

    //Recorremos el arreglo para construir el monticulo minimo
    for (let x = Arreglo.length - 1; x >= 0; x--) {
        myArr = genMonticuloMinimo(myArr, Arreglo[x]);
    //    console.log('entro:' +   Arreglo[x] + ' Salio:' +  myArr)
    }

    return myArr;
}

//array desordenado que debemos convertir en monticulo minimo
let myArray = [15,10,3,15,39,45,1,58,99,44,15,37]

console.log('Entrada:' +  myArray);

console.log('Salida:' +  convertirMontMin(myArray));