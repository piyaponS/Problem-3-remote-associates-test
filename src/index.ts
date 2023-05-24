function getQuestionPart(phrases: string[]): string[] {
  const phrase = phrases.map((word) => word.replace(/\s/g, ""));
  let phrase1: string[] = phrase[0].split("");
  let phrase2: string[] = phrase[1].split("");
  let phrase3: string[] = phrase[2].split("");

  const intersection = (
    arr1: string[],
    arr2: string[],
    arr3: string[]
  ): any => {
    const group1: string[] = arr1.filter(
      (ele) => arr2.includes(ele) && arr3.includes(ele)
    );
    const group2: string[] = arr2.filter(
      (ele) => arr1.includes(ele) && arr3.includes(ele)
    );
    const group3: string[] = arr3.filter(
      (ele) => arr1.includes(ele) && arr2.includes(ele)
    );
    return [group1, group2, group3];
  };

  let allGroup = intersection(phrase1, phrase2, phrase3);

  function extractWord(groups: string[][]): string | null {
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

    const commonLetter: string[] = Array.from(commonLettersSet);

    if (commonLetter.length === 0) {
      return null;
    }

    const word: string = commonLetter.join("");
    return word;
  }

  const commonWord: string | null = extractWord(allGroup);

  if (commonWord) {
    const filteredPhrases: string[] = phrases.map((phrase) =>
      phrase.replace(commonWord, "")
    );
    return filteredPhrases;
  } else {
    console.log("There is no common word in phrases");
    return [];
  }
}

console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]));
console.log(getQuestionPart(["FRIENDSHIP", "GIRLFRIEND", "BEFRIEND"]));
