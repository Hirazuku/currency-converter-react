import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Task from "./Task";
import React, { useState } from 'react';


function App() {

  const [amount, setAmount] = useState([
    { id: 1, number: 8, done: true },
  ]);

  const changeAmountEuro = (number) => {
    setAmount(amount => [
      { number: number * 0.23 }
    ]);
  };

  const changeAmountJen = (number) => {
    setAmount(amount => [
      { number: number * 41.76 }
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
          <Form
            changeAmountEuro={changeAmountEuro}
            changeAmountJen={changeAmountJen}
          />
        }
      />

      <Section
        title="Kwota wynosi: "
        body={<Task
          amount={amount}
        />}
      />
      <p className="currency__name">EUR/JPY</p>
    </Container>
  );
}

export default App;
