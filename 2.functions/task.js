function getArrayParams(...arr) {
    let max = 0;
    let min = arr[0];
    let sum = 0;
    
    for (i = 0; i < arr.length; i += 1) {
      max = (max < arr[i]) ? (max = arr[i]) : (max = max);
    }
        for (i = 0; i < arr.length; i += 1) {
      min = (min < arr[i]) ? (min = min) : (min = arr[i]);
    }
      for (i = 0; i < arr.length; i += 1) {
      sum += arr[i];
    }
    let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}
getArrayParams();

function summElementsWorker(...arr) {
  const initialValue = 0;
  let sum = arr.reduce((total, amount) => total + amount, initialValue);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let maxNumber = (arr.length === 0) ? 0 : Math.max.apply(null, arr);
  let minNumber = (arr.length === 0) ? 0 : Math.min.apply(null, arr);
  
  let result = maxNumber - minNumber;
  return result;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let result = 0;
  
  for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
      }
      else {
        sumOddElement += arr[i];
      }
    result = sumEvenElement - sumOddElement;
  }
  return result;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let result = 0;

  for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
    result = sumEvenElement / countEvenElement;
  }
  return result;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
   if (maxWorkerResult < func(...arrOfArr[i])) {
     maxWorkerResult = func(...arrOfArr[i]);
   }
    else {
      maxWorkerResult = maxWorkerResult;
    }
  }
  return maxWorkerResult;
}
