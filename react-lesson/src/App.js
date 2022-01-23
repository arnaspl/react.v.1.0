import './App.css';
import ExpenseForm from './components/ExpenseForm';
import Expenses from './components/Expenses';
import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import TotalExpenses from './components/TotalExpenses';

function App() {
  // const DUMMY_EXPENSES = [
  //   {
  //     title: 'Book',
  //     amount: 8.99,
  //     date: new Date(2021, 11, 20).toISOString(),
  //     id: 0,
  //   },
  //   {
  //     title: 'Car',
  //     amount: 10000,
  //     date: new Date(2020, 10, 10).toISOString(),
  //     id: 1,
  //   },
  //   {
  //     title: 'Phone',
  //     amount: 1000,
  //     date: new Date(2020, 10, 11).toISOString(),
  //     id: 2,
  //   }
  // ];

  
  const ALL_EXPENSES = localStorage.getItem("expenses")
    ? JSON.parse(localStorage.getItem("expenses"))
    : [];

    const [expenses, setExpenses] = useState(ALL_EXPENSES);
    const [filteredYear, setFilteredYear] = useState('2021');

    useEffect(() => {
      localStorage.setItem('expensses', JSON.stringify(expenses))
    }, [expenses])
    

  

  const saveDataHandler = (enteredData) => {
    setExpenses(prevState => {
      return [...prevState, 
      enteredData]
    });
  };

  const expenseYears = expenses.map(expense => {
    return new Date(expense.date).getFullYear()
  })

  const uniqueYears = [...new Set(expenseYears)]

  const filterChangeHandler = (year) => {
    setFilteredYear(year)
  }

  const filteredExpenses = expenses.filter(expense => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  })

  const yearlyData = uniqueYears.map((year) => {
    return { label: year, value: 0};
  });

  for (const item of expenses) {
    const expenseYear = new Date(item.date).getFullYear()
    console.log(expenseYear);

    for (const yearlyDataItem of yearlyData) {
      if (yearlyDataItem.label === expenseYear) {
        yearlyDataItem.value += item.amount
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Expenses tracker</h1>
      </header>
      <ExpenseForm onSave={saveDataHandler}/>
      <Filter years={uniqueYears} onFilterChange={filterChangeHandler}/>
      <Expenses expenses={filteredExpenses}/>
      <TotalExpenses dataPoints={yearlyData}/>
    </div>
  );
}

export default App;
