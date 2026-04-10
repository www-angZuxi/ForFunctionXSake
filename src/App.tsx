import { useState } from "react";
import Graph from "./components/Graph";

function App() {
  const equations = ["1", "2", "3"];

  const [userEquation, setUserEquation] = useState("");
  let [index, setIndex] = useState(0);

  return (
  <>

    <header className="text-white fs-1" style={{margin:"3vw 2vw 1vw"}}>ForF(x)Sake<i className="fs-5 i mx-3"> - Graphing Game for nerds and enthusiasts alike.</i></header>

    <div className="
      row col" 
      style={{
        background: "#d7d0d5cf",
        borderRadius:"5vw 0 0 0",
        padding:"5vw 0 5vw"
      }}
    >

      

      <div className="col-3 text-muted mx-auto">

        <h1 className="mt-2 fs-1">Welcome, Wang!</h1>
        <h2 className="fs-4">Today's problem set:</h2>
        <h2 className="my-5 fs-4">Level {index+1}/{equations.length}</h2>

        {/* User Input */}
        <div className="form-floating">
        <input
          type="text" className="form-control" id="floatingInput" placeholder="Enter equation"
          value={userEquation}
          style={{width:"20vw"}}
          onChange={(e) => {
            let value = e.target.value.replaceAll(" ", "");
            setUserEquation(value);
            if (value.toLowerCase().replaceAll("y=", "") === equations[index]) {
              if(index+1 === equations.length){
                setTimeout(() => {window.alert("Woah! \r\nYou finished everything! 🤓\r\n Thank you for playing!");}, 200);
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

    <footer className="text-center text-white p-5 bg-secondary" style={{height:"20vh"}}>
      <p>Graphing Game by <a style={{color:"#c6e3fb"}} href="https://github.com/www-angZuxi" target="_blank">WWWang</a></p>
      <p>For feedback, please do hesitate to contact me at juiceboy327@gmail.com</p>
    </footer>

  </>
  );
}

export default App;