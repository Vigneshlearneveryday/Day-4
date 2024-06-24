let sumArr = (arr) => {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
var arr = [10,20,30,40,50,60,70,80,90,99];
console.log(sumArr(arr));
