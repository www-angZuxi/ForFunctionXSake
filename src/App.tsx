import { useState } from "react";
import Graph from "./components/Graph";
import UserInput from "./components/UserInput"

function App() {

  const dailyequations = [
    ["2x-3", "ax-c"], 
    ["x^2-3x+1", "x^a-bx+c"], 
    ["x^3+3x^2-3", "x^a+ax^b-a"], 
    ["-x^3+3x^2+x-2", "-x^a+ax^b+x-b"], 
    ["cos(x)^3", "cos(x)^a"], 
    ["sin(x)^3+x-1", "sin(x)^a+x-c"]
  ];

  const [userEquation, setUserEquation] = useState("");
  let [index, setIndex] = useState(0);

  return (
  <>

    <header className="text-white text-center fs-5" style={{margin:"0.5vw", userSelect: "none"}}>
      ForF(x)Sake<i> - Graphing Game for nerds and enthusiasts alike.</i>
    </header>


    <div className="row col" 
      style={{
        background: "#d7d0d5cf",
        borderRadius:"5vw 0 0 0",
        padding:"5vw 0 5vw"
      }}
    >


      <div className="col-3 text-muted mx-auto">
        <UserInput targetEquations={dailyequations} userEquation={userEquation} setUserEquation={setUserEquation} index={index} setIndex={setIndex}/>
      </div>

      
      <div className="col-8">
        <Graph equation={dailyequations[index][0]} userEquation={userEquation} />
      </div>


    </div>


    <footer className="text-center text-white p-5" style={{height:"20vh", background:"darkslategray"}}>
      <p>Graphing Game by <a style={{color:"#c6e3fb"}} href="https://github.com/www-angZuxi" target="_blank">WWWang</a></p>
      <p>For feedback, please do hesitate to contact me at <u>juiceboy327@gmail.com</u></p>
    </footer>

  </>
  );
}

export default App;