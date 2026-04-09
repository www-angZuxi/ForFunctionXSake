import { useState } from "react";
import Graph from "./components/Graph";

function App() {
  const equations = ["1", "2", "3"];

  const [userEquation, setUserEquation] = useState("");
  let [index, setIndex] = useState(0);

  return (
  <>
    <h1 className="text-center">ForF(x)Sake - Graphing Game</h1>
    {/* Graph Display */}
    <Graph equation={equations[index]} userEquation={userEquation} />

    {/* User Input */}
    <div className="form-floating mt-3">
    <input
      type="text" className="form-control" id="floatingInput" placeholder="Enter equation"
      value={userEquation}
      onChange={(e) => {
        let value = e.target.value.replaceAll(" ", "");
        setUserEquation(value);
        if (value.toLowerCase().replaceAll("y=", "") === equations[index]) {

          if(index+1 === equations.length){
            setTimeout(() => {window.alert("Woah! \r\nYou finished everything! 🤓");}, 200);
          }
          else{
            setTimeout(() => {window.alert("Correct! 🎉 \r\nMoving onto the next...");}, 200);
            setTimeout(() => {setIndex(++index);}, 200);
          }

        }
      }}
    />
    <label htmlFor="floatingInput">Enter Equation...</label>
    </div>

  </>
  );
}

export default App;