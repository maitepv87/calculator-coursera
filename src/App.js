import { useState } from "react";
import "./App.css";
import { Button } from "./components";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");

  const parseInput = () => {
    const value = Number(inputValue);
    return isNaN(value) ? null : value;
  };

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
      <div>
        <p className="result">{result}</p>
        {error && <p className="error">{error}</p>}

        <input
          type="number"
          min="0"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a number"
        />
        <Button variant="primary" onClick={handleAdd}>
          Add
        </Button>
        <Button variant="primary" onClick={handleSubtract}>
          Subtract
        </Button>
        <Button variant="primary" onClick={handleMultiply}>
          Multiply
        </Button>
        <Button variant="primary" onClick={handleDivide}>
          Divide
        </Button>
        <Button variant="danger" onClick={handleResetInput}>
          Reset Input
        </Button>
        <Button variant="danger" onClick={handleResetResult}>
          Reset Result
        </Button>
      </div>
    </div>
  );
}

export default App;
