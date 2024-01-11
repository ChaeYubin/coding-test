function solution(s) {
    let string = s;
    let count = 0;
    let zero = 0;
    
    while (true) {
        let previous = string.length;
        
        string = string.replace(/0/g, '');
        zero += previous - string.length;
        count++;
        
        string = (string.length).toString(2);   
        
        if (string.length === 1)
            break;
    }
    
    return [count, zero];
}