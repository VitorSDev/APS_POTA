function heapify(array, n, i) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < n && array[largest] < array[l]) {
    largest = l;
  }

  if (r < n && array[largest] < array[r]) {
    largest = r;
  }
  if (largest != i) {
    let aux = array[i];
    array[i] = array[largest];
    array[largest] = aux;

    heapify(array, n, largest);
  }
  return array;
}

export function heapSort(array) {
  let n = array.length;
  var comparacoes = 0;
  for (let i = n / 2 - 1; i >= 0; i--) {
    comparacoes += 2;
    heapify(array, n, i, comparacoes);
  }

  for (let i = n - 1; i > 0; i--) {
    let aux = array[0];
    array[0] = array[i];
    array[i] = aux;
    comparacoes += 2;
    heapify(array, i, 0);
  }
  return comparacoes;
}
