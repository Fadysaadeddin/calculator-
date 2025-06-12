import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
 const [isResult, setIsResult] = useState(false);
  const handleButtonClick = (value) => {
    const isOperator = ['+', '-', '*', '/'].includes(value);

    if (isResult) {
      if (isOperator) {
        // If it's an operator, append it to the current result
        setDisplay(display + value);
      } else {
        // If it's a number, start fresh
        setDisplay(value);
      }
      setIsResult(false);
    } else if (display === "0" && !isOperator) {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setIsResult(false);
  };

    const calculateResult = () => {
    try {
  
      const result = new Function('return ' + display)();
      setDisplay(String(result));
        setIsResult(true);
    } catch (error) {
      setDisplay("Error");
    }
  };
  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleClear()}className="clear">
          AC
        </button>
        <button className="advanced">...</button>
        <button className="advanced">...</button>
        <button onClick={() => handleButtonClick("/")} className="operator">
          /
        </button>
        <button onClick={() => handleButtonClick("7")} >7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("*")} className="operator">
          ×
        </button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")} >6</button>
        <button onClick={() => handleButtonClick("-")} className="operator">
          -
        </button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("+")} className="operator">
          +
        </button>
        <button onClick={() => handleButtonClick("0")} className="zero">
          0
        </button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button></button>
        <button onClick={calculateResult} className="operator">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
