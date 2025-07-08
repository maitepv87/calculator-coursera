import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  const divide = (e) => {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    if (inputValue === 0) {
      alert("Cannot divide by zero!");
      return;
    }
    setResult((result) => result / inputValue);
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult(0);
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button type="button" onClick={plus}>
          add
        </button>
        <button type="button" onClick={minus}>
          subtract
        </button>
        <button type="button" onClick={times}>
          multiply
        </button>
        <button type="button" onClick={divide}>
          divide
        </button>
        <button type="button" onClick={resetInput}>
          resetInput
        </button>
        <button type="button" onClick={resetResult}>
          resetResult
        </button>
      </form>
    </div>
  );
}

export default App;
