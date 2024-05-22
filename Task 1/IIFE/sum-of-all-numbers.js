(function () {
    let sum = [1, 2, 3, 4].reduce(add, 5);
    function add(accumulator, a) {
      return accumulator + a;
    }
    console.log(sum);
  })()
  