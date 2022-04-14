import React from "react";
import {connect} from "react-redux";
import {handleChangeName} from '../actions/index';

class SecondName extends React.Component {


    render(){

        return(

            <>
                Second Name: <input  name={"secondName"} onChange={this.props.setSecondNameInput} type={"text"}/>
            </>
        )
    }
}



const mapDispatchToProps = (dispatch) => {

    return {

        setSecondNameInput : (e) => dispatch(handleChangeName( 'CHANGE_SECOND_INPUT_NAME' , e.target.value))
        
    }
}

export default connect(null, mapDispatchToProps)(SecondName);