import Expense from "./Expense"

const Expenses = (props) => {
    return (
        <div className='expenses'>
            {props.expenses.map((item) => {
               return (
               <Expense title={item.title} amount={item.amount} date={item.date} />
               );
            })}
        </div>
    );
};

export default Expenses;