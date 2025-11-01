import "./style.css";
import React, { useState } from 'react';


const Form2 = ({ changeAmount }) => {

    const [number, setNumber] = useState();

    
    const onFormSubmit = (event) => {
        event.preventDefault();
        changeAmount(number)
    }

    return (
        <>Podaj aktualny kurs walut
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


export default Form2;    