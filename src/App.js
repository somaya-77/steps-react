import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // step state
  const [step , setStep] = useState(1);
  // close & open state
  const [isOpen , setIsOpen] = useState(true);

  const arrLength = messages.length;
  
  function handlePrevius() {
    if(step > 1 && step <= arrLength){
      setStep((step) => step - 1);
    }
  };

  function handleNext() {
    if(step > 0 && step < arrLength){
      setStep((step) => step + 1);
    }
  }

  return(
   <>
    <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>&times;</button>
    {isOpen && (
       <div className="steps">
       <div className="numbers">
         <div className={`${step >= 1 ? "active" : ""}`}>1</div>
         <div className={`${step >= 2 ? "active" : ""}`}>2</div>
         <div className={`${step >= 3 ? "active" : ""}`}>3</div>
       </div>
 
       <div className="message">
         <p>Step {step}: {messages[step - 1]}</p>
       </div>
 
       <div className="buttons">
         <button style={{background: "#7950f2" , color: "#fff"}} onClick={handlePrevius}>Previous</button>
         <button style={{background: "#7950f2" , color: "#fff"}} onClick={handleNext}>Next</button>
       </div>
     </div>
    )}
   </>
  )
};
