function solution(before, after) {
  before.split("").map((s) => (after = after.replace(s, "")));
  return after === "" ? 1 : 0;
}
