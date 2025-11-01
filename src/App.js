import './App.css';
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Task from "./Task";
import React, { useState } from 'react';


function App() {

  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [amount, setAmount] = useState([
    { id: 1, number: 8, done: true },
  ]);

  const changeAmount = (number) => {
    setAmount(amount => [
      { number: number1 * number2}
    ]);
  };


    const onFormSubmit = (event) => {
      event.preventDefault();
      changeAmount(number1, number2);
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
        <form onSubmit={onFormSubmit}>
          <input
            value={number2}
            type="number"
            onChange={({ target }) => setNumber2(target.value)}
            className="form__field"
            placeholder="Wpisz aktualny kurs" />
          <button className="button">Przelicz</button>
        </form>
        <p>{number1}</p>
        {number2}
      </>
    )





  return (
    <Container>

      <Header
        title="Zamiana walut"

      />




      <Section
        body={
          <Form2
            changeAmount={changeAmount}
          />
        }
      />

      <Section
        title="Kwota wynosi: "
        body={<Task
          amount={amount}
        />}

      />


    </Container>
  );
}

export default App;
