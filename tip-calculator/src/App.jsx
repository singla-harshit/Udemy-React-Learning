import React, { useState } from "react";
import "./App.css";

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(0);
  function clear(){
    setBillAmount(0);
    setPercent1(0);
    setPercent2(0);
  }
  return (
    <div>
       <BillInput billAmount={billAmount} setBillAmount={setBillAmount}  />
       <ServiceRating percent={percent1} setPercent={setPercent1}>How much you liked the service &nbsp; &nbsp;</ServiceRating>
       <ServiceRating percent={percent2} setPercent={setPercent2}>How much your friend liked the service &nbsp; &nbsp;</ServiceRating>
       <Bill billAmount={billAmount} percent1={percent1} percent2={percent2}/>
      <Button onClick={clear}>Reset</Button>
    </div>
  );
}

function BillInput({billAmount , setBillAmount}){
  return(
    <div>
      <span>How much was the bill amount &nbsp; &nbsp;</span>
      <input value={billAmount} type="number" onChange={(e)=>(setBillAmount(Number(e.target.value)))} style={{textAlign:"center"}}/>  
    </div>
  )
}

function ServiceRating({children,percent , setPercent}){
  return(
    <div>
      {children}
      <select value={percent} onChange={(e)=>setPercent(Number(e.target.value))} >
        <option value={0}>Dissatisfied (0% tip)</option>
        <option value={5}>Its Okay (5% tip)</option>
        <option value={10}>Good (10% tip)</option>
        <option value={20}>Amazing (20% tip)</option>
      </select>
    </div>
  )
}

function Bill({billAmount , percent1 , percent2}){
  const avg = (percent1 + percent2)/2;
  const tip = billAmount*avg/100;
  return(
    <h3>You pay {billAmount+tip} (${billAmount} + ${tip} tip)</h3>
  )
}

function Button({ children , onClick}) {
  return <button style={{margin:"10px"}} onClick={onClick}>{children}</button>;
}

export default App;
