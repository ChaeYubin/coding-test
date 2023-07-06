function solution(numbers, hand) {
    // const keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']];
    let leftHand = [3, 0];
    let rightHand = [3, 2];
    
    return numbers.map((num) => {
        if (num === 1 || num === 4 || num === 7) {
            leftHand = [parseInt(num / 3), 0];
            return 'L';
        }
        else if (num === 3 || num === 6 || num === 9) {
            rightHand = [parseInt(num / 3) - 1, 2];
            return 'R';
        }
        else {
            let leftToKey = Math.abs((num === 0 ? 3 : parseInt(num / 3)) - leftHand[0]) + Math.abs(1 - leftHand[1]);
            let rightToKey = Math.abs((num === 0 ? 3 : parseInt(num / 3)) - rightHand[0]) + Math.abs(1 - rightHand[1]);
            let toGo = [num === 0 ? 3 : parseInt(num / 3), 1];
            
            if (leftToKey < rightToKey) {
                leftHand = toGo;
                return 'L';
            } else if (leftToKey > rightToKey) {
                rightHand = toGo;
                return 'R';
            } else {
                if (hand === "left") {
                    leftHand = toGo;
                    return 'L';
                } else {
                    rightHand = toGo;
                    return 'R';
                }
            }
        }
    }).join("");
}