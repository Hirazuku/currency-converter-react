import "./style.css";
import React, { useState } from 'react';


const Form1 = ({ changeAmount }) => {

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
                    type="number"
                    onChange={({ target }) => setNumber(target.value)}
                    className="form__field"
                    placeholder="Wpisz kwotę" />
            </form>
            
            
        </>
    )
}


export default Form1;    