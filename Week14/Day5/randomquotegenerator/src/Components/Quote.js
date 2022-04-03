import React from 'react';
import './Quote.css';


class Quote extends React.Component{


  constructor(){

    super();
  }


  render() {

    const styleObj = {

      transition: "color 1s",
      textAlign : "center",
      color : this.props.color,
      marginTop : "0px",
    };

    return (
      <>
       <h1 className={this.props.class} style={styleObj}>{`"${this.props.quote}"`}</h1>
      </>
    );
  }
}




  
  export default Quote;