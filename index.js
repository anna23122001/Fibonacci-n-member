function fibonacci(n) {
  if (n < 3) {
    return "Entered wrong number";
  }
  let fibNa = 1;
  let fibNb = 1;
  let fibN = 0;

  for (let i = 3; i <= n; i++) {
    fibN = fibNa + fibNb;
    fibNa = fibNb;
    fibNb = fibN;
  }

  console.log(`${n}-й член последовательности Фибоначчи: ${fibN}`);
}
let n = 100;
fibonacci(n);

