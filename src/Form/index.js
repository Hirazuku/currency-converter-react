import "./style.css";
import React, { useState } from 'react';


const Form = ({ changeAmount }) => {

    const [number, setNumber] = useState();

    const onFormSubmit = (event) => {
        event.preventDefault();
        changeAmount(number)
    }

    return (
        <>Podaj kwotę euro do przeliczenia
            <form onSubmit={onFormSubmit}>
                <input
                    value={number}
                    onChange={({ target }) => setNumber(target.value)}
                    className="form__field"
                    placeholder="Wpisz kwotę" />
                <button className="button">Przelicz</button>
            </form>
            
            
        </>
    )
}


export default Form;    