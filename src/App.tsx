import { useState } from "react";
import Graph from "./components/Graph";

function App() {
  const equations = ["1", "2", "3"];

  const [userEquation, setUserEquation] = useState("");
  let [index, setIndex] = useState(0);

  return (
  <>

    <h1 className="m-4">ForF(x)Sake</h1>

    <div className="
      d-flex row
      rounded-top-5 col py-5" 
      style={{background: "#d7d0d5cf"}}
    >


      <div className="col-4 text-muted justify-content-center">

        <h1 className="mx-5 mt-5">Welcome, Wang!</h1>
        <h5 className="mx-5">Today's problem set:</h5>
        <h4 className="m-5">Level {index+1}/{equations.length}</h4>

        {/* User Input */}
        <div className="form-floating m-5">
        <input
          type="text" className="form-control" id="floatingInput" placeholder="Enter equation"
          value={userEquation}
          style={{width:"25vw"}}
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

      </div>

      {/* Graph Display */}
      <div className="col-8">
        <Graph equation={equations[index]} userEquation={userEquation} />
      </div>


    </div>

  </>
  );
}

export default App;