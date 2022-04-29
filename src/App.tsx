import React, { useState } from 'react';
import './App.scss';
import { BarChart } from './BarChart/BarChart';
import { Data } from './react-app-env.d';
import { LineChart } from './LineChart/LineChart';
import { PieChart } from './PieChart/PieChart';

export const App: React.FC = () => {
  const [valueX, setValueX] = useState('January, February, March, April, May, June');
  const [valueY, setValueY] = useState('0, 10, 5, 2, 20, 30, 45');
  const [selectedOption, setSelectedOption] = useState('Bar');
  const backgroundColors = ['rgb(137,161,246)', 'rgb(160,255,155)', 'rgb(249,166,255)'];

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'xValue') {
      setValueX(event.target.value);
    } else {
      setValueY(event.target.value);
    }
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const data: Data = {
    labels: valueX.replace(/\s/g, '').split(','),
    datasets: [{
      label: `${selectedOption} Chart`,
      backgroundColor: (selectedOption === 'Line') ? backgroundColors[0] : backgroundColors,
      borderColor: 'rgb(0,51,255)',
      data: valueY.replace(/\s/g, '').split(','),
    }],
  };

  const selectComponent = () => {
    switch (selectedOption) {
      case 'Bar':
        return (<BarChart chartData={data} />);
      case 'Line':
        return (<LineChart chartData={data} />);
      case 'Pie':
        return (<PieChart chartData={data} />);
      default:
        return (<BarChart chartData={data} />);
    }
  };

  return (
    <div className="app">
      <div className="app__inputs">
        <label className="app__labels" htmlFor="xValue">
          X axis labels:
          <input
            name="xValue"
            type="text"
            value={valueX}
            className="app__input"
            onChange={inputHandler}
          />
        </label>
        <label className="app__labels" htmlFor="yValue">
          Y axis labels:
          <input
            type="text"
            name="yValue"
            value={valueY}
            className="app__input"
            onChange={inputHandler}
          />
        </label>
      </div>
      {selectComponent()}
      <div className="app__radio-buttons">
        <label htmlFor="bar">
          <input
            type="radio"
            value="Bar"
            checked={selectedOption === 'Bar'}
            onChange={handleOptionChange}
          />
          Bar Chart
        </label>
        <label htmlFor="line">
          <input
            type="radio"
            value="Line"
            checked={selectedOption === 'Line'}
            onChange={handleOptionChange}
          />
          Line Chart
        </label>
        <label htmlFor="pie">
          <input
            type="radio"
            value="Pie"
            checked={selectedOption === 'Pie'}
            onChange={handleOptionChange}
          />
          Pie Chart
        </label>
      </div>
    </div>
  );
};
