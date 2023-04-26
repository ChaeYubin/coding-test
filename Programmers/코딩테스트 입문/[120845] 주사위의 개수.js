function solution(box, n) {
  let max_width = Math.floor(box[0] / n);
  let max_length = Math.floor(box[1] / n);
  let max_height = Math.floor(box[2] / n);

  return max_width * max_length * max_height;
}
