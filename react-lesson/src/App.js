import './App.css';
import ExpenseForm from './components/ExpenseForm';
import Expenses from './components/Expenses';

function App() {
  const DUMMY_EXPENSES = [
    {
      title: 'Book',
      amount: '8.99',
      date: new Date(2021, 11, 20).toISOString(),
      id: 0,
    },
    {
      title: 'Car',
      amount: '10000',
      date: new Date(2021, 10, 10).toISOString(),
      id: 1,
    }
  ];

  // const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Expenses tracker</h1>
      </header>
      <ExpenseForm />
      <Expenses expenses={DUMMY_EXPENSES}/>
    </div>
  );
}

export default App;
