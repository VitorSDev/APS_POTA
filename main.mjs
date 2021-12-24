// vetores
import { Vetores } from "./vetores/ClasseVetores.mjs";

// algoritmos
import { bubbleSort } from "./algoritmos/bubbleSort.mjs";
import { insertionSort } from "./algoritmos/insertionSort.mjs";
import { selectionSort } from "./algoritmos/selectionSort.mjs";
import { heapSort } from "./algoritmos/heapSort.mjs";
import { mergeSort } from "./algoritmos/mergeSort.mjs";
import { countingSort } from "./algoritmos/countingSort.mjs";
import { bucketSort } from "./algoritmos/bucketSort.mjs";
import { radixSort } from "./algoritmos/radixSort.mjs";
import { quickSort } from "./algoritmos/quickSort.mjs";

// Bubble Sort
const VetoresBubble = new Vetores();
// tamanho 5
let mediaBubble5 = 0;
for (let i = 0; i < VetoresBubble.vetores5.length; i++) {
  mediaBubble5 += bubbleSort(VetoresBubble.vetores5[i]);
}
mediaBubble5 = mediaBubble5 / 50;
// tamanho 10
let mediaBubble10 = 0;
for (let i = 0; i < VetoresBubble.vetores10.length; i++) {
  mediaBubble10 += bubbleSort(VetoresBubble.vetores10[i]);
}
mediaBubble10 = mediaBubble10 / 50;
// tamanho 50
let mediaBubble50 = 0;
for (let i = 0; i < VetoresBubble.vetores50.length; i++) {
  mediaBubble50 += bubbleSort(VetoresBubble.vetores50[i]);
}
mediaBubble50 = mediaBubble50 / 50;
// tamanho 100
let mediaBubble100 = 0;
for (let i = 0; i < VetoresBubble.vetores100.length; i++) {
  mediaBubble100 += bubbleSort(VetoresBubble.vetores100[i]);
}
mediaBubble100 = mediaBubble100 / 50;
// tamanho 1000
let mediaBubble1000 = 0;
for (let i = 0; i < VetoresBubble.vetores1000.length; i++) {
  mediaBubble1000 += bubbleSort(VetoresBubble.vetores1000[i]);
}
mediaBubble1000 = mediaBubble1000 / 50;
// tamanho 10000
let mediaBubble10000 = 0;
for (let i = 0; i < VetoresBubble.vetores10k.length; i++) {
  mediaBubble10000 += bubbleSort(VetoresBubble.vetores10k[i]);
}
mediaBubble10000 = mediaBubble10000 / 50;
const mediasBubble = {};
mediasBubble.media5 = mediaBubble5;
mediasBubble.media10 = mediaBubble10;
mediasBubble.media50 = mediaBubble50;
mediasBubble.media100 = mediaBubble100;
mediasBubble.media1000 = mediaBubble1000;
mediasBubble.media10k = mediaBubble10000;

// Insertion Sort
const VetoresInsertion = new Vetores();
// tamanho 5
let mediaInsertion5 = 0;
for (let i = 0; i < VetoresInsertion.vetores5.length; i++) {
  mediaInsertion5 += insertionSort(VetoresInsertion.vetores5[i]);
}
mediaInsertion5 = mediaInsertion5 / 50;
// tamanho 10
let mediaInsertion10 = 0;
for (let i = 0; i < VetoresInsertion.vetores10.length; i++) {
  mediaInsertion10 += insertionSort(VetoresInsertion.vetores10[i]);
}
mediaInsertion10 = mediaInsertion10 / 50;
// tamanho 50
let mediaInsertion50 = 0;
for (let i = 0; i < VetoresInsertion.vetores50.length; i++) {
  mediaInsertion50 += insertionSort(VetoresInsertion.vetores50[i]);
}
mediaInsertion50 = mediaInsertion50 / 50;
// tamanho 100
let mediaInsertion100 = 0;
for (let i = 0; i < VetoresInsertion.vetores100.length; i++) {
  mediaInsertion100 += insertionSort(VetoresInsertion.vetores100[i]);
}
mediaInsertion100 = mediaInsertion100 / 50;
// tamanho 1000
let mediaInsertion1000 = 0;
for (let i = 0; i < VetoresInsertion.vetores1000.length; i++) {
  mediaInsertion1000 += insertionSort(VetoresInsertion.vetores1000[i]);
}
mediaInsertion1000 = mediaInsertion1000 / 50;
// tamanho 10000
let mediaInsertion10000 = 0;
for (let i = 0; i < VetoresInsertion.vetores10k.length; i++) {
  mediaInsertion10000 += insertionSort(VetoresInsertion.vetores10k[i]);
}
mediaInsertion10000 = mediaInsertion10000 / 50;

const mediasInsertion = {};
mediasInsertion.media5 = mediaInsertion5;
mediasInsertion.media10 = mediaInsertion10;
mediasInsertion.media50 = mediaInsertion50;
mediasInsertion.media100 = mediaInsertion100;
mediasInsertion.media1000 = mediaInsertion1000;
mediasInsertion.media10k = mediaInsertion10000;

// Selection Sort
const VetoresSelection = new Vetores();
// tamanho 5
let mediaSelection5 = 0;
for (let i = 0; i < VetoresSelection.vetores5.length; i++) {
  mediaSelection5 += selectionSort(VetoresSelection.vetores5[i]);
}
mediaSelection5 = mediaSelection5 / 50;
// tamanho 10
let mediaSelection10 = 0;
for (let i = 0; i < VetoresSelection.vetores10.length; i++) {
  mediaSelection10 += selectionSort(VetoresSelection.vetores10[i]);
}
mediaSelection10 = mediaSelection10 / 50;
// tamanho 50
let mediaSelection50 = 0;
for (let i = 0; i < VetoresSelection.vetores50.length; i++) {
  mediaSelection50 += selectionSort(VetoresSelection.vetores50[i]);
}
mediaSelection50 = mediaSelection50 / 50;
// tamanho 100
let mediaSelection100 = 0;
for (let i = 0; i < VetoresSelection.vetores100.length; i++) {
  mediaSelection100 += selectionSort(VetoresSelection.vetores100[i]);
}
mediaSelection100 = mediaSelection100 / 50;
// tamanho 1000
let mediaSelection1000 = 0;
for (let i = 0; i < VetoresSelection.vetores1000.length; i++) {
  mediaSelection1000 += selectionSort(VetoresSelection.vetores1000[i]);
}
mediaSelection1000 = mediaSelection1000 / 50;
// tamanho 10000
let mediaSelection10000 = 0;
for (let i = 0; i < VetoresSelection.vetores10k.length; i++) {
  mediaSelection10000 += selectionSort(VetoresSelection.vetores10k[i]);
}
mediaSelection10000 = mediaSelection10000 / 50;

const mediasSelection = {};
mediasSelection.media5 = mediaSelection5;
mediasSelection.media10 = mediaSelection10;
mediasSelection.media50 = mediaSelection50;
mediasSelection.media100 = mediaSelection100;
mediasSelection.media1000 = mediaSelection1000;
mediasSelection.media10k = mediaSelection10000;

// Heap Sort
const VetoresHeap = new Vetores();
// tamanho 5
let mediaHeap5 = 0;
for (let i = 0; i < VetoresHeap.vetores5.length; i++) {
  mediaHeap5 += heapSort(VetoresHeap.vetores5[i]);
}
mediaHeap5 = mediaHeap5 / 50;
// tamanho 10
let mediaHeap10 = 0;
for (let i = 0; i < VetoresHeap.vetores10.length; i++) {
  mediaHeap10 += heapSort(VetoresHeap.vetores10[i]);
}
mediaHeap10 = mediaHeap10 / 50;
// tamanho 50
let mediaHeap50 = 0;
for (let i = 0; i < VetoresHeap.vetores50.length; i++) {
  mediaHeap50 += heapSort(VetoresHeap.vetores50[i]);
}
mediaHeap50 = mediaHeap50 / 50;
// tamanho 100
let mediaHeap100 = 0;
for (let i = 0; i < VetoresHeap.vetores100.length; i++) {
  mediaHeap100 += heapSort(VetoresHeap.vetores100[i]);
}
mediaHeap100 = mediaHeap100 / 50;
// tamanho 1000
let mediaHeap1000 = 0;
for (let i = 0; i < VetoresHeap.vetores1000.length; i++) {
  mediaHeap1000 += heapSort(VetoresHeap.vetores1000[i]);
}
mediaHeap1000 = mediaHeap1000 / 50;
// tamanho 10000
let mediaHeap10000 = 0;
for (let i = 0; i < VetoresHeap.vetores10k.length; i++) {
  mediaHeap10000 += heapSort(VetoresHeap.vetores10k[i]);
}
mediaHeap10000 = mediaHeap10000 / 50;

const mediasHeap = {};
mediasHeap.media5 = mediaHeap5;
mediasHeap.media10 = mediaHeap10;
mediasHeap.media50 = mediaHeap50;
mediasHeap.media100 = mediaHeap100;
mediasHeap.media1000 = mediaHeap1000;
mediasHeap.media10k = mediaHeap10000;

// Merge Sort
const VetoresMerge = new Vetores();
// tamanho 5
let mediaMerge5 = 0;
for (let i = 0; i < VetoresMerge.vetores5.length; i++) {
  mediaMerge5 += mergeSort(VetoresMerge.vetores5[i]);
}
mediaMerge5 = mediaMerge5 / 50;
// tamanho 10
let mediaMerge10 = 0;
for (let i = 0; i < VetoresMerge.vetores10.length; i++) {
  mediaMerge10 += mergeSort(VetoresMerge.vetores10[i]);
}
mediaMerge10 = mediaMerge10 / 50;
// tamanho 50
let mediaMerge50 = 0;
for (let i = 0; i < VetoresMerge.vetores50.length; i++) {
  mediaMerge50 += mergeSort(VetoresMerge.vetores50[i]);
}
mediaMerge50 = mediaMerge50 / 50;
// tamanho 100
let mediaMerge100 = 0;
for (let i = 0; i < VetoresMerge.vetores100.length; i++) {
  mediaMerge100 += mergeSort(VetoresMerge.vetores100[i]);
}
mediaMerge100 = mediaMerge100 / 50;
// tamanho 1000
let mediaMerge1000 = 0;
for (let i = 0; i < VetoresMerge.vetores1000.length; i++) {
  mediaMerge1000 += mergeSort(VetoresMerge.vetores1000[i]);
}
mediaMerge1000 = mediaMerge1000 / 50;
// tamanho 10000
let mediaMerge10000 = 0;
for (let i = 0; i < VetoresMerge.vetores10k.length; i++) {
  mediaMerge10000 += mergeSort(VetoresMerge.vetores10k[i]);
}
mediaMerge10000 = mediaMerge10000 / 50;

const mediasMerge = {};
mediasMerge.media5 = mediaMerge5;
mediasMerge.media10 = mediaMerge10;
mediasMerge.media50 = mediaMerge50;
mediasMerge.media100 = mediaMerge100;
mediasMerge.media1000 = mediaMerge1000;
mediasMerge.media10k = mediaMerge10000;

// Counting Sort
const VetoresCounting = new Vetores();
// tamanho 5
let mediaCounting5 = 0;
for (let i = 0; i < VetoresCounting.vetores5.length; i++) {
  mediaCounting5 += countingSort(VetoresCounting.vetores5[i]);
}
mediaCounting5 = mediaCounting5 / 50;
// tamanho 10
let mediaCounting10 = 0;
for (let i = 0; i < VetoresCounting.vetores10.length; i++) {
  mediaCounting10 += countingSort(VetoresCounting.vetores10[i]);
}
mediaCounting10 = mediaCounting10 / 50;
// tamanho 50
let mediaCounting50 = 0;
for (let i = 0; i < VetoresCounting.vetores50.length; i++) {
  mediaCounting50 += countingSort(VetoresCounting.vetores50[i]);
}
mediaCounting50 = mediaCounting50 / 50;
// tamanho 100
let mediaCounting100 = 0;
for (let i = 0; i < VetoresCounting.vetores100.length; i++) {
  mediaCounting100 += countingSort(VetoresCounting.vetores100[i]);
}
mediaCounting100 = mediaCounting100 / 50;
// tamanho 1000
let mediaCounting1000 = 0;
for (let i = 0; i < VetoresCounting.vetores1000.length; i++) {
  mediaCounting1000 += countingSort(VetoresCounting.vetores1000[i]);
}
mediaCounting1000 = mediaCounting1000 / 50;
// tamanho 10000
let mediaCounting10000 = 0;
for (let i = 0; i < VetoresCounting.vetores10k.length; i++) {
  mediaCounting10000 += countingSort(VetoresCounting.vetores10k[i]);
}
mediaCounting10000 = mediaCounting10000 / 50;

const mediasCounting = {};
mediasCounting.media5 = mediaCounting5;
mediasCounting.media10 = mediaCounting10;
mediasCounting.media50 = mediaCounting50;
mediasCounting.media100 = mediaCounting100;
mediasCounting.media1000 = mediaCounting1000;
mediasCounting.media10k = mediaCounting10000;

// Bucket Sort
const VetoresBucket = new Vetores();
// tamanho 5
let mediaBucket5 = 0;
for (let i = 0; i < VetoresBucket.vetores5.length; i++) {
  mediaBucket5 += bucketSort(VetoresBucket.vetores5[i]);
}
mediaBucket5 = mediaBucket5 / 50;
// tamanho 10
let mediaBucket10 = 0;
for (let i = 0; i < VetoresBucket.vetores10.length; i++) {
  mediaBucket10 += bucketSort(VetoresBucket.vetores10[i]);
}
mediaBucket10 = mediaBucket10 / 50;
// tamanho 50
let mediaBucket50 = 0;
for (let i = 0; i < VetoresBucket.vetores50.length; i++) {
  mediaBucket50 += bucketSort(VetoresBucket.vetores50[i]);
}
mediaBucket50 = mediaBucket50 / 50;
// tamanho 100
let mediaBucket100 = 0;
for (let i = 0; i < VetoresBucket.vetores100.length; i++) {
  mediaBucket100 += bucketSort(VetoresBucket.vetores100[i]);
}
mediaBucket100 = mediaBucket100 / 50;
// tamanho 1000
let mediaBucket1000 = 0;
for (let i = 0; i < VetoresBucket.vetores1000.length; i++) {
  mediaBucket1000 += bucketSort(VetoresBucket.vetores1000[i]);
}
mediaBucket1000 = mediaBucket1000 / 50;
// tamanho 10000
let mediaBucket10000 = 0;
for (let i = 0; i < VetoresBucket.vetores10k.length; i++) {
  mediaBucket10000 += bucketSort(VetoresBucket.vetores10k[i]);
}
mediaBucket10000 = mediaBucket10000 / 50;

const mediasBucket = {};
mediasBucket.media5 = mediaBucket5;
mediasBucket.media10 = mediaBucket10;
mediasBucket.media50 = mediaBucket50;
mediasBucket.media100 = mediaBucket100;
mediasBucket.media1000 = mediaBucket1000;
mediasBucket.media10k = mediaBucket10000;

// Radix Sort
const VetoresRadix = new Vetores();
// tamanho 5
let mediaRadix5 = 0;
for (let i = 0; i < VetoresRadix.vetores5.length; i++) {
  mediaRadix5 += radixSort(VetoresRadix.vetores5[i]);
}
mediaRadix5 = mediaRadix5 / 50;
// tamanho 10
let mediaRadix10 = 0;
for (let i = 0; i < VetoresRadix.vetores10.length; i++) {
  mediaRadix10 += radixSort(VetoresRadix.vetores10[i]);
}
mediaRadix10 = mediaRadix10 / 50;
// tamanho 50
let mediaRadix50 = 0;
for (let i = 0; i < VetoresRadix.vetores50.length; i++) {
  mediaRadix50 += radixSort(VetoresRadix.vetores50[i]);
}
mediaRadix50 = mediaRadix50 / 50;
// tamanho 100
let mediaRadix100 = 0;
for (let i = 0; i < VetoresRadix.vetores100.length; i++) {
  mediaRadix100 += radixSort(VetoresRadix.vetores100[i]);
}
mediaRadix100 = mediaRadix100 / 50;
// tamanho 1000
let mediaRadix1000 = 0;
for (let i = 0; i < VetoresRadix.vetores1000.length; i++) {
  mediaRadix1000 += radixSort(VetoresRadix.vetores1000[i]);
}
mediaRadix1000 = mediaRadix1000 / 50;
// tamanho 10000
let mediaRadix10000 = 0;
for (let i = 0; i < VetoresRadix.vetores10k.length; i++) {
  mediaRadix10000 += radixSort(VetoresRadix.vetores10k[i]);
}
mediaRadix10000 = mediaRadix10000 / 50;

const mediasRadix = {};
mediasRadix.media5 = mediaRadix5;
mediasRadix.media10 = mediaRadix10;
mediasRadix.media50 = mediaRadix50;
mediasRadix.media100 = mediaRadix100;
mediasRadix.media1000 = mediaRadix1000;
mediasRadix.media10k = mediaRadix10000;

console.log("BUBBLE SORT:");
console.log(mediasBubble);
console.log("INSERTION SORT:");
console.log(mediasInsertion);
console.log("SELECTION SORT:");
console.log(mediasSelection);
console.log("HEAP SORT:");
console.log(mediasHeap);
console.log("MERGE SORT:");
console.log(mediasMerge);
// console.log("QUICK SORT:");
// console.log(mediasQuick);
console.log("COUNTING SORT:");
console.log(mediasCounting);
console.log("BUCKET SORT:");
console.log(mediasBucket);
console.log("RADIX SORT:");
console.log(mediasRadix);
