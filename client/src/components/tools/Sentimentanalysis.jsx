import React, { useState, useEffect } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';


                          //({ data })
const Sentimentanalysis = () => {
  const [averageSentiment, setAverageSentiment] = useState(0);
  const data={'The movie was': 0.0,
   'movie was amazing.': 0.5719,
    'was amazing. I': 0.0,
    'amazing. I really': 0.3612,
    'I really enjoyed': 0.6369,
    'really enjoyed it.': 0.5719,
    'The acting was': 0.0,
    'acting was fantastic.': 0.5719}

  const calculateAverage = () => {
    let sum = 0;
    data.forEach(item => {
      sum += item.sentiment;
    });
    setAverageSentiment(sum / data.length);
  };

  useEffect(() => {
    calculateAverage();
  }, [data]);

  return (
    <div className='text-center'>
    <h1>Helo </h1>
      <VictoryChart>
        <VictoryAxis
          label="Trigram"
          style={{
            axisLabel: { padding: 30 },
            tickLabels: { fontSize: 20 }
          }}
        />
        <VictoryAxis
          dependentAxis
          label="Sentiment"
          style={{
            axisLabel: { padding: 40 },
            tickLabels: { fontSize: 20 }
          }}
        />
        <VictoryBar
          data={data}
          x="trigram"
          y="sentiment"
          labels={d => `${d.sentiment}`}
        />
      </VictoryChart>
      <h3>Average Sentiment: {averageSentiment.toFixed(2)}</h3>
    </div>
  );
};

export default Sentimentanalysis;
