function solution(id_pw, db) {
  for (let v of db) {
    if (v[0] === id_pw[0] && v[1] === id_pw[1]) return "login";
    if (v[0] === id_pw[0] && v[1] !== id_pw[1]) return "wrong pw";
  }

  return "fail";
}
