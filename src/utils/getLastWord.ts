export async function getLastWord(sentence: string) {
  sentence = sentence.trim();
  const lastSpaceIndex = sentence.lastIndexOf(" ");

  if (lastSpaceIndex === -1) ({ text: sentence, lastWord: "" });

  return {
    text: sentence.substring(0, lastSpaceIndex),
    lastWord: sentence.substring(lastSpaceIndex + 1),
  };
}
