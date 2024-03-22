function solution(sequence, k) {
    let answer = [];
    
    let lt = 0;
    let rt = 0;
    
    // lt부터 rt까지의 합을 저장할 변수
    let sum = 0;
    
    while (true) {
        if (sum >= k) {  
            // sum이 k 이상이면 lt가 가리키던 값을 sum에서 빼고, lt를 한 칸 오른쪽으로 이동시킨다.
            sum -= sequence[lt++];
        } else if (rt === sequence.length) {
            // sum < k && rt === sequence.length이면 반복을 멈춘다. (더 이상 탐색할 필요가 없으므로)
            break;
        } else {
            // sum < k이면 sum에 rt가 가리키던 값을 더하고 rt를 한 칸 오른쪽으로 이동시킨다.
            sum += sequence[rt++];
        }

        if (sum == k) {
            if (answer.length === 0) {
                answer = [lt, rt];
            } else {
                answer = rt - lt < answer[1] - answer[0] ? [lt, rt] : answer;
            }
        }
    }
    
    answer[1] = answer[1] - 1;
    
    return answer;
}