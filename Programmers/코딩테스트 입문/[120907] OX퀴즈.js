function solution(quiz) {
  return quiz.map((v) => {
    let arr = v.split(" ");

    let ans =
      arr[1] === "-"
        ? Number(arr[0]) - Number(arr[2])
        : Number(arr[0]) + Number(arr[2]);
    if (arr[arr.length - 1] === ans.toString()) return "O";
    else return "X";
  });
}
