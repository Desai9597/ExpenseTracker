import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense'
import {useState} from 'react';
import ExpenseHeader from './components/ExpenseHeader/ExpenseHeader';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Grocery',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
   setExpenses((prevExpenses) => {     
      return [...prevExpenses,expense];
   }) ;
  };

  return (
    <div>
      <ExpenseHeader/>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
