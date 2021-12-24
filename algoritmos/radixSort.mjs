const getNum = (num, index) => {
  const strNum = String(num);
  let end = strNum.length - 1;
  const foundNum = strNum[end - index];
  if (foundNum === undefined) return 0;
  else return foundNum;
};
const largestNum = (arr, comparacoes) => {
  let largest = "0";
  arr.forEach((num) => {
    const strNum = String(num);
    comparacoes++;
    if (strNum.length > largest.length) largest = strNum;
  });
  let obj = {};
  obj.retorno = largest.length;
  obj.comparacoes = comparacoes;
  return obj;
};
export const radixSort = (arr) => {
  var comparacoes = 0;
  let maxLength = largestNum(arr, comparacoes);
  comparacoes = maxLength.comparacoes;
  maxLength = maxLength.retorno;
  for (let i = 0; i < maxLength; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let num = getNum(arr[j], i);
      if (num !== undefined) buckets[num].push(arr[j]);
    }
    arr = buckets.flat();
  }
  return comparacoes;
};
