import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Greeting from './components/Greeting';
import User from './components/User';
import users from './users.json';
import './App.css'

function App() {

  console.log(users);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}


        {/* <Hello />
        <Greeting />
        <Hello /> */}



        {/* <User /> */}



{/* 
        <User name={'Ziv'} email={'halif3014@gmail.com'} username={'zivuch'}/>
        <User name={'Avi'} email={'halif3015@gmail.com'} username={'avivuni'}/>
        <User name={'Ortal'} email={'halif3016@gmail.com'} username={'otalo'}/> */}




        {/* {

          users.map(item => {

            return(

              // We just using here one component so we don't have to wrap it with parent element
              <User name={item.name} email={item.email} username={item.username} /> 
            )
          })
        } */}




{

users.map(item => {

  return(

    // We just using here one component so we don't have to wrap it with parent element
    <User user={item} /> 
  )
})
}



      </header>
    </div>
  );
}





export default App;
