import React from 'react';
import ReactApexChart from 'react-apexcharts';
export default function ChartDisplay(props) {
 
  return (
 <div id="chart" style={{display:'inline-block',marginTop: '15px'}}>
    <ReactApexChart options={props.chartOptions} series={props.chartSeries} height={props.height} width={props.width}/>
  </div>
);

}
  
