import React from 'react';

const OperationSelect = props => {

    const styleObj = {

        display : 'block',
        marginTop : '20px',
        marginLeft : '630px'

    };

    return (
    
      <>
        <select style={styleObj} onChange={props.setOperationFun}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
       
      </>
    );
  }
  
  export default OperationSelect;