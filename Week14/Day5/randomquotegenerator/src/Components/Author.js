import React from 'react';
import './Author.css';


class Author extends React.Component{


  constructor(){

    super();
  }


  render() {

    const styleObj = {

      marginLeft : '600px',
      marginTop : '30px',
      color : this.props.color

  };

    return (
      <>
       <h3 className={this.props.class} style={styleObj}>{`-${this.props.author}-`}</h3>
      </>
    );
  }
}
  
export default Author;