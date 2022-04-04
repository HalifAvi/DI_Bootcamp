import './App.css';
import React from 'react';
import QuoteBtt from './Components/QuoteBtt';
import Quote from './Components/Quote'; 
import Author from './Components/Author'; 
import quotes from './QuotesDatabase.js';
import colorsArr from './ColorsArr.js';


class App extends React.Component{

  constructor(){

    super();

    this.state = {

      quote : quotes[0].quote,
      author : quotes[0].author,
      prevQuoteIdx : 0,
      prevColorIdx : 0,
      color : colorsArr[0],
      class : " "
    }
  }


  changeQuote = () => {

    let currQuoteIdx = 0;
    let currColorIdx = 0;
    let author;

    // CHOOSE RANDOM QUOTE
    while(this.state.prevQuoteIdx === currQuoteIdx){

      // Returns a random integer from 0 to quotes.length -1:
      currQuoteIdx = Math.floor(Math.random() * (quotes.length));
    }


    // CHOOSE RANDOM COLOR
    while(this.state.prevColorIdx === currColorIdx){

      // Returns a random integer from 0 to colorsArr.length -1:
      currColorIdx = Math.floor(Math.random() * (colorsArr.length));
    }

    this.state.prevColorIdx = currColorIdx;
    this.state.prevQuoteIdx = currQuoteIdx;

    if(quotes[currQuoteIdx].author === ""){

      author = "Unknown";

    }else{

      author = quotes[currQuoteIdx].author;
    }


    this.setState({
      quote : quotes[currQuoteIdx].quote,
      author : author,
      color : colorsArr[currColorIdx],
      class : " " 
    } , () => {

      setTimeout(()=> this.setState({class : "fadeIn"}), 100)
    });
    }

  

  render(){

    const style = {

      width : "800px",
      height : "300px",
      borderRadius: "25px",
      backgroundColor : "white",
    }

    return (
      <div style={{height:"100vh", transition: "background-color 1s",
      backgroundColor: this.state.color,  paddingLeft : "250px", paddingTop : "150px"}}>
        <div style={style}>

          <Quote quote = {this.state.quote} color = {this.state.color} class = {this.state.class}/>
          <Author author = {this.state.author} color = {this.state.color}  class = {this.state.class}/>
          <QuoteBtt changeQuoteFun = {this.changeQuote} color = {this.state.color}/>

        </div>
      </div>
    );
  }
}


export default App;

