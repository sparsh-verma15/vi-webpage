import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const ChartComponent = (props) => {
  // Generate some dummy data for demonstration
 

  return (
    <div style={{height:'400px'}}> 
        <Line data={props.data} options={props.options} />
    </div>
  ) 
};

export default ChartComponent;