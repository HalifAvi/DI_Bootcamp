import { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);

  return (

    <div className="App">
      
      <button onClick={()=> setCounter(prev => prev +1)}>+</button>
      <button onClick={()=> setCounter(counter-1)}>-</button>
      <div>{counter}</div>

    </div>
  );
}

export default App;
