"use strict";
function getQuestionPart(phrases) {
    const phrase = phrases.map((word) => word.replace(/\s/g, ""));
    let phrase1 = phrase[0].split("");
    let phrase2 = phrase[1].split("");
    let phrase3 = phrase[2].split("");
    const intersection = (arr1, arr2, arr3) => {
        const group1 = arr1.filter((ele) => arr2.includes(ele) && arr3.includes(ele));
        const group2 = arr2.filter((ele) => arr1.includes(ele) && arr3.includes(ele));
        const group3 = arr3.filter((ele) => arr1.includes(ele) && arr2.includes(ele));
        return [group1, group2, group3];
    };
    let allGroup = intersection(phrase1, phrase2, phrase3);
    function extractWord(groups) {
        const commonLettersSet = new Set(groups[0]);
        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];
            const groupSet = new Set(group);
            commonLettersSet.forEach((letter) => {
                if (!groupSet.has(letter)) {
                    commonLettersSet.delete(letter);
                }
            });
        }
        const commonLetter = Array.from(commonLettersSet);
        const word = commonLetter.join("");
        return word;
    }
    const commonWord = extractWord(allGroup);
    if (commonWord) {
        const filteredPhrases = phrases.map((phrase) => phrase.replace(commonWord, ""));
        console.log(filteredPhrases);
    }
}
getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]);
getQuestionPart(["FRIENDSHIP", "GIRLFRIEND", "BEFRIEND"]);
//# sourceMappingURL=index.js.map