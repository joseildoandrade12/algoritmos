const arrayNumeros = [1, 3, 4, 6, 7, 9, 10, 16, 28, 29, 34, 40];

const buscaBinaria = (array, item) => {
    let baixo = 0;
    let alto = array.length - 1;

    while (baixo <= alto) {
        const meio = Math.floor((baixo + alto) / 2);
        const chute = array[meio];
        if (chute == item) {
            return meio;
        } else if (chute > item) {
            alto = meio - 1;
        } else {
            baixo = meio + 1;
        }
    }
    return null;
};

console.log(buscaBinaria(arrayNumeros, 10));
