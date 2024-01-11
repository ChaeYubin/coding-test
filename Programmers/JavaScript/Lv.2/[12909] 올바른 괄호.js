function solution(s) {
  const stack = [];

  for (let v of s) {
    if (v === "(") {
      stack.push(v);
    } else if (stack.length && v === ")") {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0 ? true : false;
}
