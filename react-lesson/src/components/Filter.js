const Filter = (props) => {
    const changeHandler = (e) => {
        props.onFilterChange(e.target.value)
    };

    return (
        <div>
            <select onChange={changeHandler}>
                {props.years.map(year => {
                    return <option>{year}</option>
                })}
            </select>
        </div>
    );
};

export default Filter;