function solution(wallpaper) {
  let lux = 50;
  let luy = 50;
  let rdx = 0;
  let rdy = 0;

  wallpaper.map((v, rowIndex) => {
    v.split("").map((s, colIndex) => {
      if (s === "#") {
        console.log(rowIndex, colIndex);
        if (rowIndex < lux) lux = rowIndex;
        if (colIndex < luy) luy = colIndex;
        if (rowIndex > rdx) rdx = rowIndex;
        if (colIndex > rdy) rdy = colIndex;
      }
    });
  });

  return [lux, luy, rdx + 1, rdy + 1];
}
