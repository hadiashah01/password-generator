import { useState } from "react";

function App() {
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-2xl px-6 py-6 my-8 bg-gray-800 text-orange-500">
        {" "}
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input
            type="text"
            className="outline-none w-full py-2 px-3 text-orange-500 font-mono tracking-wider font-semibold"
            placeholder="Password"
            readOnly
          />
          <button
            className="outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-4 py-1 shrink-0 font-medium transition-colors"
          >
            copy
          </button>
        </div>
        {/* Controls */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <div className="flex items-center gap-x-2">
            <input
            />
            <label className="text-orange-500 font-medium">
              Length 
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              className="cursor-pointer accent-blue-600 rounded"
            />
            <label
              htmlFor="numberInput"
              className="cursor-pointer text-orange-500"
            >
              Numbers
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
            />
            <label
              htmlFor="characterInput"
              className="cursor-pointer text-orange-500"
            >
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
