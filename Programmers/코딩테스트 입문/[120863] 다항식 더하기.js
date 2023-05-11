function solution(polynomial) {
  let term = polynomial.split(" + ");

  let num1 = 0;
  let num2 = 0;

  for (let i = 0; i < term.length; i++) {
    if (term[i].includes("x")) {
      if (term[i].length > 1)
        num1 += Number(term[i].slice(0, term[i].length - 1));
      else num1 += 1;
    } else num2 += Number(term[i]);
  }

  return num1 && num2
    ? `${num1 === 1 ? "" : num1}x + ${num2}`
    : num1
    ? `${num1 === 1 ? "" : num1}x`
    : `${num2}`;
}
