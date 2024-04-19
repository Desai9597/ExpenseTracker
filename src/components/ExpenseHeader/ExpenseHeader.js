import React from 'react';
import logo from '../../assets/expense-tracker-logo.jpg';
import './ExpenseHeader.css';

const ExpenseHeader = () => {

    return (
        <header className="header">
           <img src={logo} alt="logo" />
          <h1>Expense Tracker</h1>
               
      </header>
    );    
};
export default ExpenseHeader;