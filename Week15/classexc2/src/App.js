import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import ErrorBoundary from './components/ErrorBoundary'
import Forms from './components/Forms';

function App() {
  return (
    <div className="App">


      <Forms />

      <br/>

      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
    </div>
  );
}

export default App;
