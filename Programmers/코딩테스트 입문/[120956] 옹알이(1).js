function solution(babbling) {
  return babbling
    .map((v) => {
      s = v.replace(/aya/, "0");
      s = s.replace(/ye/, "0");
      s = s.replace(/woo/, "0");
      s = s.replace(/ma/, "0");

      return s;
    })
    .filter((s) => s.split("").every((word) => word === "0")).length;
}
