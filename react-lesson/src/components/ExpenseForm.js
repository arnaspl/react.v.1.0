import { useState } from "react";

const ExpenseForm = (props) => {
  // const [data, setData] = useState({
  //     title: '',
  //     amount: '',
  //     date: ''
  // })

  // const handleInput = (e) => {
  //     setData({
  //       ...data,
  //       [e.target.name]: e.target.value,
  //     })
  // }

  const [title, setTitle] = useState();
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date).toISOString(),
    };

    console.log(expenseData);
    props.onSave(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(parseInt(event.target.value));
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          onChange={titleChangeHandler}
          value={title}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="text"
          onChange={amountChangeHandler}
          value={amount}
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2021-12-31"
          onChange={dateChangeHandler}
          value={date}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default ExpenseForm;


// To clear input after submit two way binding: setTitle('') ir pridet value={title} prie <input />