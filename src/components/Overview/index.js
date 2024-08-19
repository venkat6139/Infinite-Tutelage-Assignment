import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
} from 'chart.js';
import './index.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Overview = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [300, 450, 200, 500, 600, 800, 750, 650, 500, 400, 450, 600],
        backgroundColor: '#8a50a2',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <section className="overview-section">
      <div className="overview-header">
        <h2>Overview</h2>
        <button className="download-report">Download Report</button>
      </div>
      <div className="overview-filters">
        <button className="filter-active">Monthly</button>
        <button>Yearly</button>
      </div>
      <div className="chart">
        <Bar data={data} options={options} />
      </div>
    </section>
  );
};

export default Overview;
