// EX 1

let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k += 1;
  soma += k;
}

console.log(`O valor de soma é: ${soma}`);

console.log("-----------------------------------------------------------");

//EX 2

// EX 3

const faturamentoMensal = [
  12045.78, 45789.65, 10123.45, 28467.89, 39201.12, 17345.34, 31567.78,
  47890.21, 23985.56, 18456.89, 29345.67, 15678.23, 42134.45, 12789.34, 34876.9,
  23987.12, 14056.78, 46978.32, 38790.45, 19234.67, 31567.78, 24567.89,
  48789.12, 15678.34, 43890.56, 27934.23, 19345.12, 15890.78, 47567.34,
  10345.89,
];
console.log(faturamentoMensal);

console.log(valoresFinanceiros);

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
