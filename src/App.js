import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Task from "./Task";
import React, { useState } from 'react';


function App() {

  const [amount, setAmount] = useState([
    { id: 1, number: 8, content: "EUR" },
  ]);

  const changeAmountEuro = (number) => {
    setAmount(amount => [
      { number: number * 0.23, content: "EUR", id: 1 }
    ]);
  };

  const changeAmountJen = (number) => {
    setAmount(amount => [
      { number: number * 41.76, content: "JPY", id: 1 }
    ]);
  };

  return (
    <Container>

      <Header
        title="Zamiana walut"
      />
      
          <Form
            changeAmountEuro={changeAmountEuro}
            changeAmountJen={changeAmountJen}
            Task={Task}
            amount={amount}
          />

      <Task
        amount={amount}
      />


    </Container>
  );
}

export default App;
