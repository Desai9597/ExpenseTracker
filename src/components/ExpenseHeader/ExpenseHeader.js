import React from 'react';
import logo from '../../assets/expense-tracker-big-logo.jpg';
import './ExpenseHeader.css';

const ExpenseHeader = () => {

    return (
        <header className="header">
          <h1>Expense Tracker</h1>
        <img src={logo} alt="logo" />        
      </header>
    );    
};
export default ExpenseHeader;