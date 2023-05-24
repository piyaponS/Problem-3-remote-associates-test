"use strict";
function getQuestionPart(phrases) {
    const words = phrases;
    for (let i = 0; i < words.length; i++) {
        const word = words[i].trim();
        const wordWithoutSpace = word.replace(/\s/g, "");
        console.log(wordWithoutSpace);
    }
}
getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]);
//# sourceMappingURL=index.js.map