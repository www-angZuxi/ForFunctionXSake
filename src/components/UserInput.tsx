import Hint from "./Hint";

type UserInputProps = {
  targetEquations: string[][];
  userEquation: string;
  setUserEquation: React.Dispatch<React.SetStateAction<string>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

function UserInput({ targetEquations, userEquation, setUserEquation, index, setIndex }: UserInputProps) {

    return <>
    
        <h1 className="mt-2 fs-1">Welcome!</h1>
        <h2 className="fs-4">Today's problem set:</h2>
        <h2 className="my-5 fs-4">Level {index+1}/{targetEquations.length}</h2>

        {/* User Input */}
        <div className="form-floating mb-2">
        <input
          type="text" className="form-control" id="floatingInput" placeholder="Enter equation"
          value={userEquation}
          style={{width:"20vw"}}
          onChange={(e) => {
            let value = e.target.value.replaceAll(" ", "");
            setUserEquation(value);
            if (value.toLowerCase().replaceAll("y=", "") === targetEquations[index][0]) {
              if(index+1 === targetEquations.length){
                setTimeout(() => {window.alert("Woah! \r\nYou finished everything! 🤓\r\n Thank you for playing!");}, 200);
              }
              else{
                setTimeout(() => {window.alert("Correct! 🎉 \r\nMoving onto the next...");}, 200);
                setTimeout(() => {setIndex(++index);}, 200);
              }
            }
          }}
        />
        <label htmlFor="floatingInput" style={{userSelect: "none"}}>F(x) = ...</label>
        </div>

        <Hint hint={targetEquations[index][1]}/>
    </>

}

export default UserInput;