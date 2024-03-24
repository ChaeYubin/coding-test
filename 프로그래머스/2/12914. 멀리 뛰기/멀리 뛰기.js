const arr = [0, 1, 1];

function fibo(n) {
    if (arr[n] !== undefined) {
        return arr[n];
    } else {
        return arr[n] = (fibo(n - 1) + fibo(n - 2)) % 1234567;
    }
}

function solution(n) {
    fibo(n + 1);
    const answer = arr[n + 1];
    return answer;
}