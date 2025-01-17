import React from "react";
import "./App.css";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";

const App: React.FC = () => {
  return (
    <div
      className="container mx-auto
                min-w-[300px]   max-w-[280px] sm:max-w-[327px]
    "
    >
      <LeftContainer />
      <RightContainer />
    </div>
  );
};

export default App;
