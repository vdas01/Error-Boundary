import React,{useState}  from "react";
import Counter1 from "./Counter";
import ErrorBoundary from "./ErrorBoundary";


function App(){
  const [value, setvalue] = useState(0);
  return(
     <div className="app">
       <h1>hii</h1>
       <ErrorBoundary>
         <Counter1 value={value} onClick={setvalue(prev => prev+1)}/>
         </ErrorBoundary>
     </div> 
  )
}

export default App;