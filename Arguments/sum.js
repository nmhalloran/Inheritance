function sum(...args) {
  let sum = 0;
  args.forEach(el => sum += el);
  return sum;
}
  // console.log(sum(1, 2, 3, 4) === 10);
  // console.log(sum(1, 2, 3, 4, 5) === 15);
