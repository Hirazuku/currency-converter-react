import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import { Result } from "./Result";
import React, { useState, useEffect } from 'react';

function App() {

  const [amount, setAmount] = useState();

  const [myDate, setMyDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMyDate(myDate => new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  const changeAmountEuro = (number) => {
    setAmount(amount => [
      { changednumber: number * 0.23, number, content: "EUR", id: 1 }
    ]);
  };

  const changeAmountJen = (number) => {
    setAmount(amount => [
      { changednumber: number * 41.76, number, content: "JPY", id: 1 }
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
        myDate={myDate}
      />

      <Result
        amount={amount}
      />

    </Container>
  );
}

export default App;
