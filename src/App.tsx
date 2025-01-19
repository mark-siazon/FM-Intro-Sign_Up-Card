import React from "react";
import "./App.css";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";

const App: React.FC = () => {
  return (
    <div
      className="container mx-auto min-w-[300px] w-[85vw] flex flex-col lg:flex-row md:gap-6 lg:gap-8 lg:items-center
                  max-w-[280px] xs:max-w-[350px] sm:max-w-[540px] lg:max-w-[900px] xl:max-w-[1180px] transition-300
    "
    >
      <LeftContainer />
      <RightContainer />
    </div>
  );
};

export default App;
