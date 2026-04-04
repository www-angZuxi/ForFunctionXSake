import { useState } from "react";
import Graph from "./components/Graph";

function App() {
  const equation = "x^2+1";
  const [userEquation, setUserEquation] = useState("");

  return (
  <>
    <div className="form-floating mb-3">
    <input
      type="text" className="form-control" id="floatingInput" placeholder="Enter equation"
      value={userEquation}
      onChange={(e) => {
        
        const value = e.target.value.replaceAll(" ", "").replaceAll("y=", "");

        setUserEquation(value);
        if (value === equation) {
          setTimeout(() => {window.alert("WE DID ITTT");}, 200);
        }
      }}
    />

    <label htmlFor="floatingInput">Enter Equation...</label>
    </div>

    <Graph equation={equation} userEquation={userEquation} />
  </>
  );
}

export default App;