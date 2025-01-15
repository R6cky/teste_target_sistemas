const fs = require("fs");

// EX 1

const totalSoma = () => {
  let indice = 13;
  let soma = 0;
  let k = 0;

  while (k <= indice) {
    k += 1;
    soma += k;
  }
  console.log(`O valor de soma é: ${soma}`);
};
//totalSoma();
console.log("-----------------------------------------------------------");

//EX 2

// EX 3

const monthlyBilling = () => {
  let menorValor = 0;
  let maiorValor = 0;
  let mediaMensal = 0;
  fs.readFile("./dados.json", "utf-8", (err, data) => {
    if (err) return err;
    let convertData = JSON.parse(data).filter((elem) => elem.valor > 0);
    maiorValor = convertData[0];
    menorValor = convertData[0];
    for (const obj in convertData) {
      mediaMensal += convertData[obj].valor / convertData.length;

      if (maiorValor.valor < convertData[obj].valor) {
        maiorValor = convertData[obj];
      }

      if (menorValor.valor > convertData[obj].valor) {
        menorValor = convertData[obj];
      }
    }
    console.log("Média diária de faturamento: R$ " + mediaMensal.toFixed(2));
    console.log("Menor valor: ", menorValor);
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
//calculoPercentual();
console.log("-----------------------------------------------------------");

// EX 5

const reverse = (string) => {
  const newString = [];
  for (let i = string.length - 1; i >= 0; i--) {
    newString.push(string[i]);
  }
  console.log(newString.toString().replaceAll(",", " "));
};

//reverse("abacate");
