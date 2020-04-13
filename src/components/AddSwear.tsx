import React from 'react';
import nlp from 'compromise';
import styled from 'styled-components';
import { TextTransition } from '../App.style';

const Swear = styled(TextTransition)`
  color: #da0404;
  margin: 0 6px;
`;

export default function AddSwear({ sentence, swear, censored }) {
  const words = nlp(sentence);

  const lastNoun = words.nouns().last();
  const split = words.splitBefore(lastNoun.text());
  const firstHalf = split.first().text();
  const lastHalf = split.last().text();

  return (
    <>
      {firstHalf}
      <Swear text={censored ? '' : swear} inline />
      {lastHalf}
    </>
  );
}
