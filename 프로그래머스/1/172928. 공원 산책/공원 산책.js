function solution(park, routes) {
    // 시작 지점 찾기
    let curLoc;
    
    park.forEach((row, rowIndex) => {
        let index = row.indexOf("S");
        
        if (index > -1) {
            curLoc = [rowIndex, index];
        }
    })
    
    console.log("시작 지점 : " + curLoc);
  
    routes.forEach((route) => {
        const [direction, distance] = route.split(" ");
        let tmp = [...curLoc];
        let isPassed = true;
        
        for (let i = 0; i < parseInt(distance, 10); i++) {
            if (direction === 'N') {
                tmp = [tmp[0] - 1, tmp[1]];
            } else if (direction === 'E') {
                tmp = [tmp[0], tmp[1] + 1];
            } else if (direction === 'S') {
                tmp = [tmp[0] + 1, tmp[1]];
            } else {
                tmp = [tmp[0], tmp[1] - 1];
            }
            
            // 공원을 벗어나는지 확인한다.
            if (
                tmp[0] < 0 ||
                tmp[0] >= park.length || 
                tmp[1] < 0 || 
                tmp[1] >= park[0].length) {
                isPassed = false;
                break;
            }

            // 이동 중 장애물을 만나는지 확인한다.
            if (park[tmp[0]][tmp[1]] === "X") {
                isPassed = false;
                break;
            }
        }
        
        // 공원을 벗어나지 않았고, 장애물을 만나지 않았다면, 이동한 위치를 현재 위치로 확정한다.
        if (isPassed) {
            curLoc = [...tmp];
        }
    })
    
    return curLoc;
}