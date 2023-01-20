import React, { useEffect,useState } from 'react';
import ChartDisplay from './ChartDisplay';
import { useDispatch,useSelector } from 'react-redux';
import * as actions from '../actions';
import * as moment from 'moment';

export default function HomePage() {
  
  const [startDate, setStartDate] = useState(moment(new Date()).format('yyyy-MM-DD'));
  const [endDate, setEndDate] = useState(moment(new Date()).add(5,'days').format('yyyy-MM-DD'));

  const dispatch = useDispatch();
  const { dateLabels, series } = useSelector(({ app }) => app)

  const GetJobsData =()=>{
    dispatch(actions.getJobsData.request({startDate,endDate}));
  };
  
  
  useEffect(() => {
    GetJobsData();
  },[dispatch,startDate,endDate])
 
  let style = {
    position: 'inherit',
    display: 'flex',
    justifyContent: 'center'
  }

  let options =   {

    stroke: {
      width: [0, 3, 3],
      curve: 'smooth'
    },
    labels: [ ...dateLabels],
    markers: {
      size: 7,
    },
    colors:['#dddddd','#95c03a','#3fb2ca'],
    tooltip: {
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0);
          }
          return y;
    
        }
      }
    },
   
  };

  return (
    <div style={{textAlign: 'center',marginTop: '15px'}}>
      <div style={{fontWeight:'bold'}}>
        בחר טווח תאריכים לצפייה בגרף
      </div>
      <div style={{'direction':'rtl', 'marginTop':'5px'}}>
        מתאריך:
        <br/>
        <input type="date" value={startDate} onChange={(date) => setStartDate(date.target.value)}></input>
      </div>
       <div style={{'direction':'rtl', 'marginTop':'5px'}}>
         עד תאריך:
         <br/>
         <input type="date" value={endDate} onChange={(date) => setEndDate(date.target.value)}></input>
       </div>    
      <div>
       <ChartDisplay chartOptions={options} chartSeries={series} height={450} width={800}/>
      </div>
    </div>
  );
}
  
