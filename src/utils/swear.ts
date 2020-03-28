import nlp from 'compromise';

export default sentence => {
  const words = nlp(sentence);
  words
    .nouns()
    .last()
    .prepend('fucking ')
    .text();
  return words.text();
};
