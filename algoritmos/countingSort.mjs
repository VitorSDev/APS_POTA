export function countingSort(arr) {
  var comparacoes = 0;
  var helper = [];
  for (var i = 0; i < arr.length; i++) {
    comparacoes += 1;
    if (!helper[arr[i]]) {
      helper[arr[i]] = 1;
    } else {
      helper[arr[i]] += 1;
    }
  }

  var newArr = [];
  for (i in helper) {
    while (helper[i] > 0) {
      newArr.push(parseInt(i));
      helper[i]--;
    }
  }
  return comparacoes;
}
