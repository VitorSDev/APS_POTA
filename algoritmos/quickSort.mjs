import { Vetores } from "../vetores/ClasseVetores.mjs";

export function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  var pivot = array[0];

  var left = [];
  var right = [];
  for (var i = 1; i < array.length; i++) {
    comparacoes++;
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

const VetoresQuick = new Vetores();
const mediasQuick = {};
// vetores 5
var comparacoes = 0;
for (let i = 0; i < 50; i++) {
  quickSort(VetoresQuick.vetores5[i]);
}
mediasQuick.media5 = comparacoes / 50;

// vetores 10
var comparacoes = 0;
for (let i = 0; i < 50; i++) {
  quickSort(VetoresQuick.vetores10[i]);
}
mediasQuick.media10 = comparacoes / 50;

// vetores 50
var comparacoes = 0;
for (let i = 0; i < 50; i++) {
  quickSort(VetoresQuick.vetores50[i]);
}
mediasQuick.media50 = comparacoes / 50;

// vetores 100
var comparacoes = 0;
for (let i = 0; i < 50; i++) {
  quickSort(VetoresQuick.vetores100[i]);
}
mediasQuick.media100 = comparacoes / 50;

// vetores  1k
var comparacoes = 0;
for (let i = 0; i < 50; i++) {
  quickSort(VetoresQuick.vetores1000[i]);
}
mediasQuick.media1k = comparacoes / 50;

// vetores 10k
var comparacoes = 0;
for (let i = 0; i < 50; i++) {
  quickSort(VetoresQuick.vetores10k[i]);
}
mediasQuick.media10k = comparacoes / 50;

console.log("QUICK SORT:");
console.log(mediasQuick);
