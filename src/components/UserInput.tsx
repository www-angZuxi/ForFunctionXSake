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

        <div className="row">
            {/* User Input */}
            <div className="form-floating mb-2 col">
            <input
            type="text" className="form-control" id="floatingInput" placeholder="Enter equation"
            value={userEquation}
            style={{width:"15vw"}}
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
            <label htmlFor="floatingInput" style={{userSelect: "none", margin:"0 1vw"}}>F(x) = ...</label>
            </div>

            <div className="col">
                <Hint hint={targetEquations[index][1]}/>
            </div>
            <i>Click icon for a hint!</i>
        </div>
    </>

}

export default UserInput;