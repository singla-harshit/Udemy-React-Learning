import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  return (
    <div style={{textAlign:"center"}}>
      <Step setStep={setStep} step={step} />
      <Counter step={step} setCount={setCount} count={count} />
    </div>
  );
}

function Step({ setStep, step }) {
  // const handleLess = () => {
  //   if (step > 1) {
  //     setStep((s) => s - 1);
  //   }
  // };

  // const handleMore = () => {
  //   setStep((s) => s + 1);
  // };
  return (
    <div>
      {/* <button onClick={handleLess}>-</button>
      Steps : {step}
      <button onClick={handleMore}>+</button> */}
      <input type="range" max={10} min={1} value={step} onChange={(e) => setStep(Number(e.target.value))} />
      {step} 
    </div>
  );
}

function Counter({ step, setCount, count }) {

  function resetHandler() {
    setCount(0)
  }

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count - step)}>-</button>
        {/* Count : {count} */}
        <input type="number" value={count} onChange={(e)=>setCount(Number(e.target.value))} style={{marginLeft:"5px" , marginRight:"5px",height:" 17px" , textAlign:"center"}}/>
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>

      <div>
        {count === 0
          ? "Today is "
          : `${Math.abs(count)} day${Math.abs(count) > 1 ? "s" : ""} 
       ${count > 0 ? "from now " : "ago "}: `
       }
        {date.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      {
        count !== 0 ? <button onClick={resetHandler}>Reset</button> : ""
      }
    </>
  );
}
export default App;
