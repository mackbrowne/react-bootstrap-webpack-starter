import React, { useEffect, useState } from 'react';
import nlp from 'compromise';
import styled from 'styled-components';
import { TextTransition } from '../App.style';

const Swear = styled(TextTransition)`
  color: #da0404;
  margin: 0 6px;
`;

export default function AddSwear({
  sentence,
  swear,
  censored,
  delay: initialDelay = 1600
}) {
  const [delay, setDelay] = useState(initialDelay);

  useEffect(() => {
    setDelay(0);
  }, []);

  const words = nlp(sentence);

  const lastNoun = words.nouns().last();
  const split = words.splitBefore(lastNoun.text());
  const firstHalf = split.first().text();
  const lastHalf = split.last().text();

  return (
    <>
      {firstHalf}
      <Swear text={censored ? '' : swear} delay={delay} inline />
      {lastHalf}
    </>
  );
}
