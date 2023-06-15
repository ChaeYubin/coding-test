function solution(spell, dic) {
    let cnt = 0;
    for (d of dic) {
        for (s of spell) {
            if (d.includes(s)) cnt++;
            d = d.replace(s, '');
        }
        if (d == '' && cnt == spell.length) return 1;
        cnt = 0;
    }
    return 2;
}