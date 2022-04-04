import React from 'react';
import './App.css';
import User from './components/User';
import 'tachyons'
import SearchBox from './components/SearchBox';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users: [],
      text : ''
    }
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>{
      this.setState({users:data})
    })
    .catch(e=>{
      console.log(e);
    })
  }

  handleClick = (value) => {

    this.setState({text : value })
  }


//   handleChange = event => {

//     console.log(event.target.value)

//     this.state.text = event.target.value;
// }


  render(){

    const {users, text} = this.state;

    const filteredItems = users.filter(item => {

      return ((item.name).toLowerCase()).includes(text.toLowerCase())

    })
 
    return(

      <div className="App">
        <header className="App-header">
        {/* <button onClick={this.handleClick}>Click Me!</button> */}

        <SearchBox handleClick = {this.handleClick}/>

        <div>
         {
          filteredItems.map((item,i)=>{
              return(
                <User user={item} key={i}/>
              )
            })
         }
         </div>
        </header>
      </div>
    )
  }
}
export default App;
