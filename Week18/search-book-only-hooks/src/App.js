import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoreInfo from './components/MoreInfo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';



function App() {
  
  return (
      <BrowserRouter>

          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/MoreInfo/:id' element={<MoreInfo />} />
          </Routes>

      </BrowserRouter>
  );
}

export default App;
