// EX 1

let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k += 1;
  soma += k;
}

console.log(`O valor de soma é: ${soma}`);

//-----------------------------------------------------------

//EX 2

// EX 3

// EX 4

const calculoPercentual = () => {
  let faturamento = {
    sp: 6783643,
    rj: 3667866,
    mg: 2922988,
    es: 2716548,
  };

  let total = Number(
    faturamento.sp + faturamento.rj + faturamento.mg + faturamento.es
  );

  for (key in faturamento) {
    console.log(
      key +
        ": " +
        faturamento[key] +
        " - percentual: " +
        ((faturamento[key] / total) * 100).toFixed(2) +
        "%"
    );
  }
};
calculoPercentual();

// EX 5

const reverse = (string) => {
  console.log(string);
};

reverse();
