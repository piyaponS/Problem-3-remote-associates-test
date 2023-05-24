"use strict";
function getQuestionPart(phrases) {
    const phrase = phrases.map((word) => word.replace(/\s/g, ""));
    const phrase1 = phrase[0].split("");
    const phrase2 = phrase[1].split("");
    const phrase3 = phrase[2].split("");
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
        const commonLetters = Array.from(commonLettersSet);
        if (commonLetters.length === 0) {
            return null;
        }
        const word = commonLetters.join("");
        return word;
    }
    console.log(extractWord(allGroup));
}
getQuestionPart(["FRIENDSHIP", "GIRLFRIEND", "BEFRIEND"]);
getQuestionPart(["BLOODBATH", "BATH SALTS", "BATHROOM"]);
//# sourceMappingURL=index.js.map