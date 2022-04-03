import React from 'react';

const QuoteBtt = props => {

    const styleObj = {

        display : 'block',
        marginTop : '100px',
        marginLeft : '650px',
        borderRadius: '10px',
        padding : '10px',
        backgroundColor : props.color
    };

    return (
    
      <>
       <button onClick={props.changeQuoteFun} style={styleObj}>NEW QUOTE</button>
      </>
    );
  }
  
  export default QuoteBtt;