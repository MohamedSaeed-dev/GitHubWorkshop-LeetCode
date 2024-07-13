function isAcronym(word, s) {
    let wordList = word.split(" ");
    if (wordList.length !== s.length) return false;

    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i][0] !== s[i]) return false;
    }
    return true;
}