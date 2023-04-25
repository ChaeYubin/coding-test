function solution(numbers, direction) {
  if (direction === "right") {
    let right = numbers.pop();
    numbers.unshift(right);
  } else {
    let left = numbers.shift();
    numbers.push(left);
  }
  return numbers;
}
