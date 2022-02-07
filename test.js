let t0 = performance.now();
const movements = [
  200, 450, 200, 200, 200, 200, -400, 3000, -650, -130, 70, 1300, 450, -650, 70,
  -650, 1300, 3000, 450, 70, -400, 1300, 200, 3000, -400, 70,
];
const checkRepeat = (movements, n) => {
  const result = [];
  for (const item of movements) {
    if (result.filter((i) => i === item).length >= n) continue;
    result.push(item);
  }
  return result;
};
console.log(checkRepeat(movements, 2));

let t1 = performance.now();
console.log("Call to checkRepeat took " + (t1 - t0) + " milliseconds.");
