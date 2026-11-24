import { useState } from "react";

function App() {
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const [Password, setPassword] = useState("");


  return (
    <>
      <div className="mt-[30vh] w-full max-w-md mx-auto shadow-md rounded-2xl px-6 py-6 my-8 bg-gray-800 text-orange-500">
        {" "}
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input
            type="text"
            className="outline-none w-full py-2 px-3 text-orange-500 font-mono tracking-wider font-semibold"
            placeholder="Password"
            readOnly
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-4 py-1 shrink-0 font-medium transition-colors">
            copy
          </button>
        </div>
        {/* Controls */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              value={length}
              max={100}
              min={6}
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-orange-500 font-medium">
              {" "}
              Length ({length})
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              className="cursor-pointer accent-blue-600 rounded
                "
            />
            <label
              htmlFor="numberInput" value={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              className="cursor-pointer text-orange-500"
            >
              Numbers
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" />
            <label
              htmlFor="symbolInput" value={symbolAllowed} onChange={() => {
                setSymbolAllowed((prev) => !prev);
              }}
              className="cursor-pointer text-orange-500"
            >
              Symbols
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
