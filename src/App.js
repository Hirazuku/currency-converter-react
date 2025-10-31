import './App.css';
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Task from "./Task";
import React, { useState } from 'react';



function App() {

  const [amount, setAmount] = useState([
    { id: 1, content: 8, done: true },
  ]);

  const changeAmount = (content) => {
    setAmount(amount => [
      { content }
    ]);
  };

  return (
    <Container>

      <Header
        title="Zamiana walut"
      />

      <Section
        title="Policz cenę:"
        body={
          <Form
            changeAmount={changeAmount}
          />
        }
      />

      <Section
        title="Policz cenę:"
        body={
          <Form
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

