const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
};

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
};