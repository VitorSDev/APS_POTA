function gerarVetor(tamanho) {
  let vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor.push(i);
  }

  var p, n, tmp;
  for (p = vetor.length; p; ) {
    n = (Math.random() * p--) | 0;
    tmp = vetor[n];
    vetor[n] = vetor[p];
    vetor[p] = tmp;
  }
  return vetor;
}

const vetores = [];
const vetoresTamanhos = [5, 10, 50, 100, 1000, 10000];

for (let i = 0; i < vetoresTamanhos.length; i++) {
  let tamanho = vetoresTamanhos[i];
  for (let j = 0; j < 50; j++) {
    vetores.push(gerarVetor(tamanho));
  }
}
