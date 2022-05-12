import './App.css';
import Products from './components/Products';
import Product from './components/Product';

import {Routes, Route, BrowserRouter} from  "react-router-dom"


function App() {

  return (

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Products />}/>
        <Route path='/:id' element={<Product />}/>
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
