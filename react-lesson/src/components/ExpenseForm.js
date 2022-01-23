import { useState, useRef, useEffect } from "react";
import ErrorModal from './ErrorModal.js'

const ExpenseForm = (props) => {
  const titleInputRef = useRef()
  const amountInputRef = useRef()
  const dateInputRef = useRef()
  
  const [error, setError] = useState();
  const [title, setTitleInput] = useState();
  // const [amount, setAmount] = useState();
  // const [date, setDate] = useState();

  const submitHandler = (event) => {
    event.preventDefault();

    if (!titleInputRef.current.value.trim().length) {
      setError({
        title: 'Wrong title',
        message: 'Please input a valid title'
      });
      return;
    }

    if (isNaN(parseFloat(amountInputRef.current.value))) {
      setError({
        title: 'Wrong amount',
        message: 'Please input a valid amount'
      });
      return;
    }

    if (!dateInputRef.current.value) {
      setError({
        title: 'Wrong date',
        message: 'Please input a valid date'
      });
      return;
    }

    const expenseData = {
      title: titleInputRef.current.value.trim(),
      amount: parseInt(amountInputRef.current.value),
      date: new Date(dateInputRef.current.value).toISOString(),
    };

    props.onSave(expenseData);

    titleInputRef.current.value = ''
    amountInputRef.current.value = ''
    dateInputRef.current.value = ''
  };

  const confirmHandler = () => {
    setError(null);
  }

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
    <>
       {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={confirmHandler}
        />
      )}
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          onChange={titleChangeHandler}
          value={title}
          ref={titleInputRef}
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
    </>
  );
};

export default ExpenseForm;


// To clear input after submit two way binding: setTitle('') ir pridet value={title} prie <input />