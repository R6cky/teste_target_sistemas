const fs = require("fs");
const { json } = require("stream/consumers");

// EX 1

let indice = 13;
let soma = 0;
let k = 0;

while (k <= indice) {
  k += 1;
  soma += k;
}

console.log(`O valor de soma é: ${soma}`);

console.log("-----------------------------------------------------------");

//EX 2

// EX 3

const monthlyBilling = () => {
  let menorValor = 0;
  let maiorValor = 0;
  let mediaMensal = 0;
  fs.readFile("./dados.json", "utf-8", (err, data) => {
    if (err) return err;
    const convertData = JSON.parse(data);
    maiorValor = { dia: 0, valor: 0 };
    menorValor = 0;
    for (const obj in convertData) {
      if (convertData[obj].valor !== 0) {
        mediaMensal = mediaMensal +=
          convertData[obj].valor / convertData.length;
      }

      if (maiorValor.valor < convertData[obj].valor) {
        maiorValor.dia = convertData[obj].dia;
        maiorValor.valor = convertData[obj].valor;
      }
    }
    console.log(convertData);
    console.log("Média diária de faturamento: R$ " + mediaMensal.toFixed(2));
    console.log("Maior valor: ", maiorValor);
  });
};
monthlyBilling();
// EX 4
const calculoPercentual = () => {
  let faturamento = {
    sp: 6783643,
    rj: 3667866,
    mg: 2922988,
    es: 2716548,
  };

  let total = faturamento.sp + faturamento.rj + faturamento.mg + faturamento.es;

  for (key in faturamento) {
    console.log(
      key +
        ": " +
        faturamento[key] +
        " | percentual: " +
        ((faturamento[key] / total) * 100).toFixed(2) +
        " %"
    );
  }
};
calculoPercentual();
console.log("-----------------------------------------------------------");

// EX 5

const reverse = (string) => {
  const newString = [];
  for (let i = string.length - 1; i >= 0; i--) {
    newString.push(string[i]);
  }
  console.log(newString.toString().replaceAll(",", " "));
};

reverse("abacate");
