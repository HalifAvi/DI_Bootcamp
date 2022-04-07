import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavLink';
import ErrorBoundary from './components/ErrorBoundary ';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import ShopScreen from './components/ShopScreen';
import PostList from './components/PostList';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';


const settings = {

  method : 'POST',

      headers : {
        'Content-Type' : 'application/json'},

      body : JSON.stringify({

        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
      })
}


function App() {
  return (
    <>
      <NavBar />

        <ErrorBoundary>
          <Routes>
            <Route path='/' element={<HomeScreen/>} />
            <Route path='/home' element={<HomeScreen/>} />
            <Route path='/shop' element={<ShopScreen/>} />
            <Route path='/profile' element={<ProfileScreen/>} />
          </Routes>
        </ErrorBoundary>

        <PostList />

        <Example1 />

        <Example2 />

        <Example3 />

        <button style={{marginTop : "100px", marginLeft : "550px"}} onClick={goToApi}>Click Me For Post Request</button>
    </>
  );
}

const goToApi = async () => {

  try{

      const fetchedResponse = await fetch('https://webhook.site/3e9781ef-6278-4a95-b0f1-7d1870fb2ea8', settings );
      console.log(fetchedResponse);

  } catch(e){ 

    console.log(e)
  }
}





export default App;
