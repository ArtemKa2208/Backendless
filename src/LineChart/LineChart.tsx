import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
// import { Data } from '../react-app-env.d';

// type Props = {
//   chartData: Data,
// };

export const LineChart: React.FC<any> = ({ chartData }) => {
  Chart.register(...registerables);

  return (
    <div className="line-chart">
      <Line data={chartData} />
    </div>
  );
};
