import "./style.css";
import React, { useState } from 'react';


const Form1 = ({ changeAmountEuro, changeAmountJen }) => {

    const [number, setNumber] = useState();
    const [currency, setCurrency] = useState();

    const onSelectChange = ({ target }) => {
        setCurrency(target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (currency == "EUR") {
            changeAmountEuro(number);
            <div>EUR</div>
            return;
        }
        if (currency == "JPY") {
            changeAmountJen(number);
            <div>JPY</div>
            return;
        }
    };



    return (
        <>Podaj kwotę do przeliczenia

            <form onSubmit={onFormSubmit}>
                <input
                    value={number}
                    type="number"
                    onChange={({ target }) => setNumber(target.value)}
                    className="form__field"
                    placeholder="Wpisz kwotę: " />
                <select value={currency} onChange={onSelectChange}>
                    <option>EUR</option>
                    <option>JPY</option>
                </select>
                <button className="button">Przelicz</button>
            </form>
        </>
    )

}


export default Form1;    