function solution(a, b) {
    const dayOfWeek = ['THU', 'FRI', 'SAT','SUN', 'MON', 'TUE', 'WED'];
    const monthToDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let day = 0;
    
    for (let i = 0; i < a - 1; i++) {
        day += monthToDay[i];
    }
    
    day += b;
    
    return dayOfWeek[day % 7];
}