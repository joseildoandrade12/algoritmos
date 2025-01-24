const fatorial = (x) => {
    if (x === 1) {
        return x;
    } else {
        return x * fatorial(x - 1);
    }
};

console.log(fatorial(5));
