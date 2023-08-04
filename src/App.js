import React from "react";
import CircularProgressBar from "./CircularProgressBar";

function App() {
  return (
    <div className="App">
      <h1>Circular Progress Bar with Start/Pause Buttons</h1>
      <CircularProgressBar size={200} strokeWidth={10} percentage={100} />
    </div>
  );
}

export default App;
