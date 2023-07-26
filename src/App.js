import logo from "./logo.svg";
import "./App.css";
import React, { useState, useMemo } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  const factorial = (n) => {
    let i = 0;
    while (i < 20000000) i++;
    if (n < 0) return -1;
    else if (n === 0) return 1;
    else return n * factorial(n - 1);
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  // const result = factorial(counter);

  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>
        Factorial of {counter} is : {result}
      </h1>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => increment()}>Increment</button>

      <hr />
      <label>Enter Name</label>
      <input
        type="text"
        name="name"
        placeholder="enter name"
        onChange={(e) => setName(e.target.value)}
      />
      {/* <h4>My name is {name}</h4> */}

      <hr />
      <DisplayName name= {name} />
    </div>
  );
}

const DisplayName = React.memo(({name}) => {
  console.log("rendered");
  return <p>{`My name is ${name}`}</p>
});

export default App;
