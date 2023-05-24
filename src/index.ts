function getQuestionPart(phrases: string[]): void {
  const phrase = phrases.map((word) => word.replace(/\s/g, ""));
  const phrase1: string[] = phrase[0].split("");
  const phrase2: string[] = phrase[1].split("");
  const phrase3: string[] = phrase[2].split("");

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

    const commonLetter: String[] = Array.from(commonLettersSet);

    if (commonLetter.length === 0) {
      return null;
    }

    const word: string = commonLetter.join("");
    return word;
  }

  console.log(extractWord(allGroup));
}
getQuestionPart(["FRIENDSHIP", "GIRLFRIEND", "BEFRIEND"]);
getQuestionPart(["BLOODBATH", "BATH SALTS", "BATHROOM"]);
