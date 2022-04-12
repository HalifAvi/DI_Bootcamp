import './App.css';
import React from 'react';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

 


class App extends React.Component{

  render(){

    return (
     <>
      <h1 style={{textAlign : "center"}}>Redux Movies</h1>
      <MovieList />
      <MovieDetails />
     </>
    )
  }

}

export default App;
