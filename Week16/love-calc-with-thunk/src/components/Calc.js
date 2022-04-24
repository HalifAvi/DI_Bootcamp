import React from 'react';
import Res from './Res'
import {connect} from 'react-redux';
import {setResults} from '../redux/actions'

const Calc = (props) =>  {

  return(
     <>
       <button onClick={props.getResults}>Click</button>
       <Res />
     </>
  )


}



const mapDispatchToProps = (dispatch) => {
  return{
    getResults: ()=> dispatch(setResults())
  }
}

export default connect(null,mapDispatchToProps)(Calc);
