export const bucketSort = (arr) => {
  if (arr.length === 0) {
    return arr;
  }
  var comparacoes = 0;
  let i,
    minValue = arr[0],
    maxValue = arr[0],
    bucketSize = 5;
  arr.forEach(function (currentVal) {
    if (currentVal < minValue) {
      minValue = currentVal;
    } else if (currentVal > maxValue) {
      maxValue = currentVal;
    }
  });
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let allBuckets = new Array(bucketCount);
  for (i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }
  arr.forEach(function (currentVal) {
    allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(
      currentVal
    );
  });
  arr.length = 0;
  allBuckets.forEach(function (bucket) {
    comparacoes = insertion(bucket, comparacoes);
    bucket.forEach(function (element) {
      arr.push(element);
    });
  });
  return comparacoes;
};

const insertion = (arr, comparacoes) => {
  let length = arr.length;
  let i, j;
  for (i = 1; i < length; i++) {
    let temp = arr[i];
    comparacoes++;
    for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return comparacoes;
};
