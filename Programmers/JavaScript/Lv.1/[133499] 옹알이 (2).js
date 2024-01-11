function solution(babbling) {
  const obj = { aya: 1, ye: 2, woo: 3, ma: 4 };
  return babbling
    .map((v) => {
      // aya, ye, woo, ma를 모두 숫자로 치환
      v = v.replace(/aya|ye|woo|ma/g, (s) => {
        return obj[s];
      });
      return v;
    })
    .filter((word) => {
      // 치환되지 않은 문자, 즉 발음하지 못하는 단어가 있으면 false 리턴
      if (word.search(/[a-z]/g) !== -1) return false;

      // 같은 숫자가 연속적으로 나오는 경우 false 리턴
      for (let i = 0; i < word.length - 1; i++) {
        if (word[i] === word[i + 1]) return false;
      }

      // 위 두 조건에서 false를 리턴하지 않았다 -> 문제가 원하는 조건에 맞는 단어이다 -> true 리턴
      return true;
    }).length; // 머쓱이의 조카가 발음할 수 있는 단어의 개수
}
