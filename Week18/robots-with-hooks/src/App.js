import React from 'react';
import './App.css';
import User from './components/User';
import SearchBox from './components/SearchBox';
import 'tachyons'
import { useState, useEffect } from 'react';

export const AppContext = React.createContext(null);


const App = () => {

  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filterUsers, setFilterUser] = useState([]);


  useEffect( () => {

    const getUsers = async() => {

      try {

        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();

        setUsers(data);
        setFilterUser(data);

      } catch (e) {

        console.log(e)
      }
    }

    getUsers();
        
  }, [])


      // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json())
    //     .then(data=>{

    //       setUsers(data)
    //       setFilterUser(data)

    //     })
    //     .catch(e=>{
    //       console.log(e);
    //     })


  useEffect( () => {

    const filterUsersArray = users.filter(item=>{

      return item.name.toLowerCase().includes(searchText.toLowerCase())
    })

    setFilterUser(filterUsersArray);

  }, [searchText])



  const handleChange = (e)=> {

      setSearchText(e.target.value)
  }


  return(

    <div>
       <header className="App-header">

        <AppContext.Provider value={{handleChange}}>
          <SearchBox/>
        </AppContext.Provider>

         <div>
          {
            filterUsers.map((item,i)=>{
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

export default App;



