import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    setCount(count - 1);
  }


  const resetcount = () => {
    setCount(0);
  }


  return (
    <div>
      <h1>{count}</h1>
      <br />
      <div>
      <button style = {{margin :2}} onClick={() => {increaseCount()}}>Increase</button>
      <button style = {{margin :2}} onClick={() => {decreaseCount ()}}>Decrease</button>
      <button style = {{margin :2}} onClick={() => {resetcount()}}>Reset</button>
      </div>
    </div>
  );
}

export default App;
