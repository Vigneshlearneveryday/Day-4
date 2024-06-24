let primeNum = [1,11,33,7,19,73,87];

let isPrime = (num) => {
  if (num === 0 || num === 1) {
    return false;
  } else {
    if (num === 2) {
      return true;
    } else {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  }
};

let primeNumbers = (array) => {
  let arr = [];
  for (let num of array) {
    if (isPrime(num)) {
     
      arr.push(Number(num));
    }
  }
  console.log(arr);
  
};

primeNumbers(primeNum);
