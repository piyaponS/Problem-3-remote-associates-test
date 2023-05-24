function getQuestionPart(phrases: string[]): void {
  const words: string[] = phrases;
  for (let i = 0; i < words.length; i++) {
    const word: string = words[i].trim();
    const wordWithoutSpace: string = word.replace(/\s/g, "");
    console.log(wordWithoutSpace);
  }
}

getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]);
