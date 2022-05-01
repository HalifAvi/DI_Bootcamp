import './App.css';
import Landing from './components/Landing';
import Movie from "./components/Movie";
import Navi from "./components/Navi";
import { Routes, Route, BrowserRouter } from 'react-router-dom';



function App() {
  return (

          <BrowserRouter>

            <Navi />

            <Route>
              <Routes path="/" element={<Landing />} />
              <Routes path="/movie/:id" element={<Movie />} />
            </Route>

          </BrowserRouter>
  );
}

export default App;
