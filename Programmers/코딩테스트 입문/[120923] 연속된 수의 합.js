function solution(num, total) {
  const min = Math.ceil(total / num - Math.floor(num / 2));
  return new Array(num).fill(0).map((el, i) => {
    return min + i;
  });

  /*
    let max = 2000;
    
    while (1) {
        const sum = num * max - ((num - 1) * num / 2);
        
        if (sum === total) {
            const arr = [];
            for (let i = 0; i < num; i++) {
                arr.push(max - i);
            }
            
            return arr.reverse();
        }
        max--;
    }
    */
}
