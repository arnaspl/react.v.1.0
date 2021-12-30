import TotalExpensesYear from "./TotalExpensesYear";

const TotalExpenses = (props) => {
    return (
        <div>
            {props.dataPoints.map((dataPoint) => {
                return (
                    <TotalExpensesYear value={dataPoint.value} label={dataPoint.label} />
                );
            })}
        </div>
    );
};

export default TotalExpenses;