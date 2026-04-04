import { useState } from "react";
import Graph from "./components/Graph";

function App() {
  const equation = "x^2+1";
  const [userEquation, setUserEquation] = useState("");

  return (
  <>
    <Graph equation={equation} userEquation={userEquation} />
    <div className="form-floating mb-3">
    <input
      type="text" className="form-control" id="floatingInput" placeholder="Enter equation"
      value={userEquation}
      onChange={(e) => {
        let value = e.target.value.replaceAll(" ", "");
        setUserEquation(value);
        if (value.toLowerCase().replaceAll("y=", "") === equation) {
        setTimeout(() => {window.alert("Correct! 🎉");}, 200);
        }
      }}
    />

    <label htmlFor="floatingInput">Enter Equation...</label>
    </div>

  </>
  );
}

export default App;