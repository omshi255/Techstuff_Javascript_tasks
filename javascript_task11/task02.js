function printNumbers(m, n) {
  let current = m;
  let timer = setInterval(() => {
    console.log(current);
    current++;
    if (current > n) {
      clearInterval(timer);
    }
  }, 1000);
}

printNumbers(5, 10);
