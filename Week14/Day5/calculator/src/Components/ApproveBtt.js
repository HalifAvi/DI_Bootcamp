import React from 'react';

const ApproveBtt = props => {

    const styleObj = {

        display : 'block',
        marginTop : '20px',
        marginLeft : '635px'

    };

    return (
    
      <>
       <button onClick={props.displayResultFun} style={styleObj}>=</button>
      </>
    );
  }
  
  export default ApproveBtt;