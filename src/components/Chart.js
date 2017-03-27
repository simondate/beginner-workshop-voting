import React from 'react';
import { VictoryBar } from 'victory';

const style = {
  labels: {
    fontSize: '1.2rem',
    fill: '#D3F9F4',
    opacity: 0.85
  },
  data: {
    fill: '#FFBD24'
  }
};

// TODO: Add chart for our answers
// Answers have a property answer: string & votes: number
// The Victory documentation is here: http://formidable.com/open-source/victory/docs/victory-bar/
// For an extra challenge try not to use Victory ;)

const Chart = ({ answers }) => {
  // TODO: Add Victory props, or use something else?
  return (
    <VictoryBar
        data={answers.map(a => ({ option: a.answer, votes: a.votes }))}
        x="option"
        y={({ votes }) => votes}
        labels={({ option }) => option}
        style={style}
      />
  )
};

export default Chart;
