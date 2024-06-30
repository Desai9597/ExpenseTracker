import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';
import {useState} from 'react';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [filteredYear,setFilteredYear] = useState('2024');

    const filterYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    
    const filteredExpenses = props.expenses.filter(expense => {       
        const date= new Date(expense.date);
        const myDate = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());        
        return myDate.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
        
        <Card className="expenses">
        <h2>View Expenses</h2>
             <ExpenseFilter selected={filteredYear} onSelectYear={filterYearHandler}></ExpenseFilter>
            
            <ExpensesChart expenses={filteredExpenses}/>

            { filteredExpenses.length === 0 ? (
                <p >No Expenses found.</p>
                ) : (
                    filteredExpenses.map(expense => (<ExpenseItem 
                        key={expense.id}
                        title={expense.title} 
                        amount={expense.amount}
                        date={expense.date} />
                        )
                     )
                )             
             }
           
        </Card>
        </div>
    );
};

export default Expenses;