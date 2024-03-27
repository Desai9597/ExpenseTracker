import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {

    //convert the dataPoints array of objects into array of int values
    const dataPointsValues=props.dataPoints.map(dataPoint => dataPoint.value);

    //find maximum value from all months. 
    //For that pull out all values from the array by spread operator as individual comma separated int values,
    //so that Math.max can find the max value
    const totalMaximum = Math.max(...dataPointsValues);


    return ( 
        <div className="chart">
        
        {props.dataPoints.map(
                (dataPoint) => (
                <ChartBar
                      key={dataPoint.label} 
                      value={dataPoint.value}
                      maxValue={totalMaximum}
                     label={dataPoint.label}  />
                    )
             )
         }

    </div>
    )
};

export default Chart;