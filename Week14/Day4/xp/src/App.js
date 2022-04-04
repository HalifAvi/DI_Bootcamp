import logo from './logo.svg';
import './App.css';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';
import BuggyCounter from './Components/BuggyCounter';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {

  // In App.js create an object const carinfo = {name: "Ford", model: "Mustang"};
  const carinfo = {name: "Ford", model: "Mustang"};

  return (
   <>
    <Car carinfo={carinfo} />
    <Events />
    <Phone />
    <Color />
   </>

    // <>
    // <h3>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</h3>
    // <ErrorBoundary>
    //   <BuggyCounter/>
    //   <BuggyCounter/>
    // </ErrorBoundary>

    // <h3>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</h3>
    // <ErrorBoundary>
    //   <BuggyCounter/>
    // </ErrorBoundary>
    // <ErrorBoundary>
    //   <BuggyCounter/>
    // </ErrorBoundary>

    // <h3>This counter is not inside of boundary. So if crashes, all other components are deleted.</h3>
    // <BuggyCounter/>    
    // </>
  );
}

export default App;
