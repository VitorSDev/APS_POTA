export function bubbleSort(arrayTeste) {
  var comparacoes = 0;
  var length = arrayTeste.length;
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length - i - 1; j++) {
      if (arrayTeste[j] > arrayTeste[j + 1]) {
        var tmp = arrayTeste[j];
        arrayTeste[j] = arrayTeste[j + 1];
        arrayTeste[j + 1] = tmp;
        comparacoes++;
      } else {
        comparacoes++;
      }
    }
  }
  return comparacoes;
}
