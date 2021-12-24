export function selectionSort(inputArr) {
  let n = inputArr.length;
  let comparacoes = 0;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
        comparacoes++;
      }
    }
    if (min != i) {
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
      comparacoes++;
    }
  }
  return comparacoes;
}
