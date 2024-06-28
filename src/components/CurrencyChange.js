
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyChange = () => {
    const { currency, currencyList, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const [show_currency, setShowCurrency] = useState(true)


    const set_currency = (c) => {
        setNewCurrency(c);
        console.log(c);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: c
        })

        setShowCurrency(false)
    }

    return (
        <div className='alert alert-success custom_drop'>

            <div className="custom_drop_trigget" onClick={() => setShowCurrency(!show_currency)}>
                <span>Currency ( {currencyList[currency]} )</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16L6 10H18L12 16Z"></path></svg>
            </div>

            {show_currency && (<ul className="alert alert-success custom_drop_content">

                {Object.keys(currencyList).map((c) => (
                    <li key={c} onClick={() => set_currency(c)}>
                        {currencyList[c]}
                    </li>
                ))}

            </ul>)}




        </div>
    );
};
export default CurrencyChange;