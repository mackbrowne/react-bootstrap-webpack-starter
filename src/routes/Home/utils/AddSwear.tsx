import React, { useEffect, useState } from 'react';
import nlp from 'compromise';
import ReactTextTransition, { presets } from 'react-text-transition';
import styled from 'styled-components';

const Swear = styled(ReactTextTransition).attrs(
  ({ censored, swear, delay }) => ({
    text: censored ? '' : swear,
    delay,
    spring: presets.stiff,
    inline: true,
    direction: 'down'
  })
)`
  margin: 0 6px;
  color: #da0404;
`;

export default function AddSwear({ sentence, swear, censored }) {
  const [delay, setDelay] = useState(850);

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
      <Swear censored={censored} swear={swear} delay={delay} />
      {lastHalf}
    </>
  );
}
