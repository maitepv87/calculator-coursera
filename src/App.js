import { useState, useRef } from "react";
import "./App.css";
import { Button } from "./components";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");

  const parseInput = () => Number(inputValue) || 0;

  const handleAdd = () => {
    setResult((prev) => prev + parseInput());
    setError("");
  };

  const handleSubtract = () => {
    setResult((prev) => prev - parseInput());
    setError("");
  };

  const handleMultiply = () => {
    setResult((prev) => prev * parseInput());
    setError("");
  };

  const handleDivide = () => {
    const value = parseInput();
    if (value === 0) {
      setError("Cannot be divided by zero");
      return;
    }
    setResult((prev) => prev / value);
    setError("");
  };

  const handleResetInput = () => {
    setInputValue("");
    setError("");
  };

  const handleResetResult = () => {
    setResult(0);
    setError("");
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Calculator</h1>
      </div>
      <form>
        <p className="result">{result}</p>
        {error && <p className="error">{error}</p>}

        <input
          pattern="[0-9]"
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a number"
        />
        <Button onClick={handleAdd}>Add</Button>
        <Button onClick={handleSubtract}>Subtract</Button>
        <Button onClick={handleMultiply}>Multiply</Button>
        <Button onClick={handleDivide}>Divide</Button>
        <Button onClick={handleResetInput}>Reset Input</Button>
        <Button onClick={handleResetResult}>Reset Result</Button>
      </form>
    </div>
  );
}

export default App;
