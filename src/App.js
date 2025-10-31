import './App.css';
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Task from "./Task";
import React, { useState } from 'react';


function App() {

  const [amount, setAmount] = useState([
    { id: 1, number: 8, done: true },
  ]);

  const changeAmount = (number) => {
    setAmount(amount => [
      { number }
    ]);
  };

  const calculateValue = (event) => {
        event.preventDefault();

        const amount = document.querySelector(".js-A");
        const exchangeRate = document.querySelector(".js-eR");
        const value = amount.value * exchangeRate.value;
        const finalValue = document.querySelector(".js-finalValue");
        finalValue.innerText = value;
    };
  

  return (
    <Container>

      <Header
        title="Zamiana walut"
      />

      <Section
        title="Policz wartość:"
        body={
          <Form1
            changeAmount={changeAmount}
          />
        }
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

