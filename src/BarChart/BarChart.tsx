import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Data } from '../react-app-env.d';

type Props = {
  chartData: Data,
};

export const BarChart: React.FC<Props> = ({ chartData }) => {
  Chart.register(...registerables);

  return (
    <div className="bar-chart">
      <Bar data={chartData} />
    </div>
  );
};
