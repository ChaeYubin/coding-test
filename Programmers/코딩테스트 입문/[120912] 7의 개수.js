function solution(array) {
    let strArray = array.toString();
    return strArray.split("").filter((v) => {if (v === '7') return v}).length;
}