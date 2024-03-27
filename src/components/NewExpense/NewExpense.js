import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = React.useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const loadForm = () => {
        setIsEditing(true);
    };

    const unloadForm = () => {
        setIsEditing(false);
    };

    return <div className="new-expense"> 
        {!isEditing &&            
            <button type='button' onClick={loadForm}> Add New Expense</button>
        }

       {isEditing && <ExpenseForm onCancel={unloadForm} onSaveExpenseData={saveExpenseDataHandler} /> }
    </div>
};

export default NewExpense;