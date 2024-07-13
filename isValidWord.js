function isValidWord(word) {
    const VOWELS = "auioe";
    if (word.length < 3) return false;

    for (let i = 0; i < word.length; i++) {
        if (!/^[a-zA-Z0-9]$/.test(word[i])) return false;
    }

    if (![...word].some(x => !/\d/.test(x) && VOWELS.includes(x.toLowerCase()))) return false;
    if (![...word].some(x => !/\d/.test(x) && !VOWELS.includes(x.toLowerCase()))) return false;
    
    return true;
}