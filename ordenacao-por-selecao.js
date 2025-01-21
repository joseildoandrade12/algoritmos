const buscaMenor = (arr) => {
    let menor = arr[0];
    let menorIndice = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < menor) {
            menor = arr[i];
            menorIndice = i;
        }
    }
    return menorIndice;
};

const ordenacaoPorSelecao = (arr) => {
    let novaArray = [];
    let copiaArray = [...arr];
    for (let i = 0; i < arr.length; i++) {
        const menor = buscaMenor(copiaArray);
        novaArray.push(copiaArray.splice(menor, 1)[0]);
    }
    return novaArray;
};

const arrayNumeros = [5, 3, 6, 2, 10];

console.log(ordenacaoPorSelecao(arrayNumeros));
