import "./style.css";
import React, { useState } from 'react';


const Form = ({ changeAmountEuro, changeAmountJen }) => {

    const [number, setNumber] = useState();
    const [currency, setCurrency] = useState();

    const onSelectChange = ({ target }) => {
        setCurrency(target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (currency == "JPY") {
            changeAmountJen(number);
            return;
        }
        else {
            changeAmountEuro(number);
            return;
        }
    };

    return (
        <>
            <div className="form__grid form__title form--biggerGap">
                Policz wartość:
            </div>

            <p className="form__section--title">Podaj kwotę do przeliczenia w PLN</p>

            <form onSubmit={onFormSubmit}>
                <input
                    className="form__field"
                    value={number}
                    type="number"
                    onChange={({ target }) => setNumber(target.value)}
                    className="form__field"
                    placeholder="Wpisz kwotę: " />
                <select
                    className="form__select"
                    value={currency}
                    onChange={onSelectChange}>
                    <option>EUR</option>
                    <option>JPY</option>
                </select>
                <button className="button">Przelicz</button>
            </form>
            
            <>
                <section className="form__title form--biggerGap">
                    <div className="form__grid">
                        Kwota wynosi:
                    </div></section>
            </>
        </>
    )

}

export default Form;    