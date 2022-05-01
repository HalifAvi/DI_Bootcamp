import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Favorites from './components/Favorites';



function App() {
  return (
    <div>
      <BrowserRouter>

        <NavigationBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
