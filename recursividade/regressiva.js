const regressiva = (numero) => {
    console.log(numero);
    if (numero <= 0) return;
    regressiva(numero - 1);
};

console.log(regressiva(10));
