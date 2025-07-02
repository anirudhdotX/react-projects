import { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!@#$%^&*";
    }

    let pass = "";

    for (let i = 0; i < length; i++) {
      let char = str.charAt(Math.floor(Math.random() * str.length));
      pass += char;
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClip = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    alert("Copied");
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 bg-gray-700 text-black">
        <h1 className="text-blue-500 text-center text-2xl">
          Password Generator
        </h1>
        <div className="flex shadow rouded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white rounded-2xl"
            placeholder="password"
            readOnly
          />

          <button
            onClick={copyPasswordToClip}
            className="bg-black text-white rounded-lg"
          >
            copy
          </button>
        </div>
        <div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={8}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="text-white" htmlFor="Length">
                Length: {length}
              </label>
            </div>
            <br />
            <div>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                  ref = { passwordRef };
                }}
              />
              <label htmlFor="Numbers" className="text-white">
                Numbers
              </label>
            </div>
            <br />
            <div>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="Char" className="text-white">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
