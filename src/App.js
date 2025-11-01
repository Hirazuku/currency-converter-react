import './App.css';
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import Form1 from "./Form1";
import Task from "./Task";
import React, { useState } from 'react';


function App() {

  const [amount, setAmount] = useState([
    { id: 1, number: 8, done: true },
  ]);

  const changeAmount = (number) => {
    setAmount(amount => [
      { number: number * 4.32 }
    ]);
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
        title="Kwota wynosi: "
        body={<Task 
        amount={amount}
        />}

      />
EUR
    </Container>
  );
}

export default App;
