function scoreOfString(s) {
    let total = 0;
    for (let i = 1; i < s.length; i++) {
        let a = s.charCodeAt(i - 1);
        let b = s.charCodeAt(i);
        total += Math.abs(a - b);
    }
    return total;
}