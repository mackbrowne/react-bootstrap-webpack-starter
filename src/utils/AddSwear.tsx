import React from 'react';
import nlp from 'compromise';
import ReactTextTransition, { presets } from 'react-text-transition';
import styled from 'styled-components';

// export default sentence => {
//   const words = nlp(sentence);
//     words.nouns()
//     .last()
//     .prepend('fucking ');
//   return words.text();
// };

const Swear = styled(ReactTextTransition).attrs(({ text }) => ({
  text,
  delay: 850,
  spring: presets.stiff,
  inline: true,
  overflow: true
}))`
  margin: 0 6px;
  color: #da0404;
`;

export default ({ sentence, swear }) => {
  const words = nlp(sentence);

  const lastNoun = words.nouns().last();
  const split = words.splitBefore(lastNoun.text());
  const firstHalf = split.first().text();
  const lastHalf = split.last().text();

  return (
    <>
      {firstHalf}
      <Swear text={swear} />
      {lastHalf}
    </>
  );
};
