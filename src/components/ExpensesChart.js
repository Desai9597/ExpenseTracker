import React from 'react';
import Chart from './Chart/Chart';

const ExpensesChart = (props) => {

    //put 0 intial values of all month expense
    const chartDataPoints = [
        {label: 'Jan',value:0},
        {label: 'Feb',value:0},
        {label: 'Mar',value:0},
        {label: 'Apr',value:0},
        {label: 'May',value:0},
        {label: 'Jun',value:0},
        {label: 'Jul',value:0},
        {label: 'Aug',value:0},
        {label: 'Sep',value:0},
        {label: 'Oct',value:0},
        {label: 'Nov',value:0},
        {label: 'Dec',value:0},        
    ];

    //update values of each month dataPoints as per the actual expense data
    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth(); //use month as index to get value from array
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    return <Chart dataPoints={chartDataPoints}/>
};

export default ExpensesChart;