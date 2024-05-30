function countVowels(str) {
    const vowels = ["a", "e", "i", "o", "u"]
    let count = 0
    str.split("").forEach(char => {
        if (vowels.includes(char)) {
            count++
        }
    });

    return count
}

console.log(countVowels("Noel rrttiore"))