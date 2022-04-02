import React from 'react';

const NumInput = props => {

    const styleObj = {

        marginLeft : '320px',
        textAlign: 'center'

    };

    return (
    
      <>
        <input pattern={"[0-9]+"}
         type={"number"}
         style={styleObj}
         id={props.id} 
         onChange={props.setInputNumFun}
         placeholder={`Please insert ${props.id} number`}/>
      </>
    );
  }
  
  export default NumInput;