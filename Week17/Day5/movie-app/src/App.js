import './App.css';
import Landing from './components/Landing';
import Movie from "./components/Movie";
import Navi from "./components/Navi";
import { Routes, Route, BrowserRouter } from 'react-router-dom';



function App() {
  return (

          <BrowserRouter>

            <Navi />

            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/movie/:id" element={<Movie />} />
            </Routes>

          </BrowserRouter>
  );
}

export default App;
