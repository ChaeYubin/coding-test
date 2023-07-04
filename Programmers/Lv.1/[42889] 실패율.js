function solution(N, stages) {
    const challenge = Array(stages.length).fill(0);
    const failure = Array(stages.length).fill(0);
    const rate = [];
    const answer = [];
    
    stages.forEach(num => {
        for (let i = 0; i < num; i++) {
            challenge[i] += 1;
        }
        failure[num - 1] += 1;
    })
    
    for (let i = 0; i < N; i++) {
        rate.push({num: i+1, rate: (failure[i] === 0 ? 0 : failure[i] / challenge[i])});
    }
    
    const sortedRate = rate.sort((a, b) => b.rate - a.rate);
    
    return sortedRate.map((v) => parseInt(v.num));
    
}