import "./style.css";
import React, { useState } from 'react';


const Form1 = ({ changeAmount }) => {

    const [number1, setNumber1] = useState();

    const onFormSubmit = (event) => {
        event.preventDefault();
        changeAmount(number1)
    }

    return (
        <>Podaj kwotę euro do przeliczenia
            <form onSubmit={onFormSubmit}>
                <input
                    value={number1}
                    type="number"
                    onChange={({ target }) => setNumber1(target.value)}
                    className="form__field"
                    placeholder="Wpisz kwotę" />
            </form>

        </>
    )
}


export default Form1;    