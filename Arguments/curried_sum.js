function sumThree(...args) {
  // let args = Array.from(arguments);
  let sum = 0;
  args.forEach( el => sum += el);
  return sum;
}

Function.prototype.curriedSum = function(numArgs) {
  let that = this;
  let numbers = [];
  const _curriedSum = function(arg) {
    numbers.push(arg);
    if (numbers.length === numArgs) {
      return that(...numbers);
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};


console.log(sumThree.curriedSum(4)(4)(20)(6)(5));
