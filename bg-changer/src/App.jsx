import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  const [clickedRed, setClickedRed] = useState(true);
  const [clickedGreen, setClickedGreen] = useState(true);
  const [clickedBlue, setClickedBlue] = useState(true);

  function changeBg(color) {
    setColor(color);
  }

  function changeButtonBgRed(){
    setClickedRed(false);
  }
  function changeButtonBgGreen(){
    setClickedGreen(false);
  }
  function changeButtonBgBlue(){
    setClickedBlue(false);
  }

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-32 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center w-full max-w-2xl">
          <button
            onClick={() => {changeBg("red"); changeButtonBgRed()}}
            className= {`{mx-3 px-4 py-2 rounded-full text-white  ${clickedRed ? "bg-red-500" : "bg-black" }`}
          >
            Red
          </button>

          <button
            onClick={() => {changeBg("green"); changeButtonBgGreen()}}
            className= {`{mx-3 px-4 py-2 rounded-full text-white  ${clickedGreen ? "bg-green-500" : "bg-black" }`}
          >
            Green
          </button>

          <button
            onClick={() => {changeBg("blue"); changeButtonBgBlue()}}
            className= {`{mx-3 px-4 py-2 rounded-full text-white  ${clickedBlue ? "bg-blue-500" : "bg-black" }`}
          >
            Blue
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
