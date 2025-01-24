const sauda2 = (nome) => {
    console.log(`Como vai? ${nome}`);
};

const tchau = () => {
    console.log("Ok, tchau!");
};

const sauda = (nome) => {
    console.log(`Olá, ${nome}`);
    sauda2(nome);
    console.log("preparando para dizer tchau...");
    tchau();
};

sauda("junior");
