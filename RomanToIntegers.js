function RomanToIntegers() {
    let dic = new Map([['M', 1000], ['D', 500], ['C', 100], ['L', 50], ['X', 10], ['V', 5], ['I', 1]]);
    let newNum = 0;
    let w = "I";
    
    for (let i = 0; i < w.length; i++) {
        if (i + 1 < w.length && dic.get(w[i]) < dic.get(w[i + 1])) {
            newNum -= dic.get(w[i]);
        } else {
            newNum += dic.get(w[i]);
        }
    }
    console.log(newNum);
}