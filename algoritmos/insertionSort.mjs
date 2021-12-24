export function insertionSort(vetor) {
  let j;
  let aux;
  let comparacoes = 0;
  for (let i = 1; i < vetor.length; i++) {
    j = i;
    while (vetor[j] < vetor[j - 1] && j > 0) {
      aux = vetor[j];
      vetor[j] = vetor[j - 1];
      vetor[j - 1] = aux;
      j -= 1;
      comparacoes++;
    }
  }
  return comparacoes;
}
