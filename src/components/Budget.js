
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleBudgetChange = (event) => {

        setNewBudget(event.target.value);
        // check if budget is less than spending
        // if less, alert
        if (event.target.value < totalExpenses) {
            alert("The budget cannot be less then spent funds  £" + (totalExpenses));
            setNewBudget(budget);
            return;
        }


        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value
        });
    }
    return (
        <div className='alert alert-secondary'>
            {/* <span>Budget: £{budget}</span> */}
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;