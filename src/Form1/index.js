import "./style.css";
import React, { useState } from 'react';


const Form1 = ({ changeAmount }) => {

    const [number, setNumber] = useState();
    const [amount, setAmount] = useState([
    { id: 1, number: 8, done: true },
]);

    const onFormSubmit = (event) => {
        event.preventDefault();
        changeAmount(number);
    }

    

    return (
        <>Podaj kwotę euro do przeliczenia

            <form onSubmit={onFormSubmit}>
                <input
                    value={number}
                    type="number"
                    onChange={({ target }) => setNumber(target.value)}
                    className="form__field"
                    placeholder="Wpisz aktualny kurs" />
                <button className="button">Przelicz</button>
            </form>
        </>
    )

}


export default Form1;    