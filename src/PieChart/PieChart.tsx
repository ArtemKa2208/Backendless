import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Data } from '../react-app-env.d';

type Props = {
  chartData: Data,
};

export const PieChart: React.FC<Props> = ({ chartData }) => {
  Chart.register(...registerables);

  return (
    <div className="pie-chart">
      <Pie data={chartData} />
    </div>
  );
};
