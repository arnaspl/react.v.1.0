const Expense = (props) => {
  return (
    <div className='expenses_item'>
      <div>
        <h2>Title</h2>
        <p>{props.title}</p>
      </div>
      <div>
        <h2>Amount</h2>
        <p>{props.amount}</p>
      </div>
      <div>
          <h2>Date</h2>
          <p>{props.date}</p>
      </div>
    </div>
  );
};

export default Expense;
