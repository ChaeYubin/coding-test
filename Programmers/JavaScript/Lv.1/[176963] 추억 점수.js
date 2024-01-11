function solution(name, yearning, photo) {
    const map = new Map();
    for (let i = 0; i < name.length; i++) {
        map.set(name[i], yearning[i]);
    }
    return photo.map(v => {
        return v.reduce((sum, cur) => sum + (map.has(cur) ? map.get(cur) : 0), 0);
    });
}