function solution(s) {
  let pCount = 0;
  let yCount = 0;

  s.split("").map((v) => {
    if (v === "p" || v === "P") pCount++;
    if (v === "y" || v === "Y") yCount++;
  });

  return pCount === yCount ? true : false;
}
