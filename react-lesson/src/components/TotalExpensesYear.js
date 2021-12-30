const TotalExpensesYear = (props) => {
    return (
        <div>
            <h2>Year: {props.label}</h2>
            <h2>Amount: {props.value}</h2>
        </div>
    );
};

export default TotalExpensesYear;