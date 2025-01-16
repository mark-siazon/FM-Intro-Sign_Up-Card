import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      className=" h-screen 
                    flex flex-col items-center justify-center text-center"
    >
      {/* Typography */}
      <h1 className="text-4xl font-bold text-white mb-6">Vite + React</h1>

      {/* Card Container */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Button */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>

        {/* Paragraph */}
        <p className="mt-4 text-gray-700">
          Edit <code className="bg-gray-200 px-1 rounded">src/App.tsx</code> and
          save to test HMR
        </p>
      </div>

      {/* Footer Text */}
      <p className="mt-6 text-gray-300">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default App;
