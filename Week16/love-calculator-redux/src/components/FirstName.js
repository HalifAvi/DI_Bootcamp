import React from "react";
import { connect } from "react-redux";
import { handleChangeName } from '../actions/index';

class FirstName extends React.Component {

    render(){

        return(
            <>
                First Name: <input name={"firstName"} onChange={this.props.setFirstNameInput} type={"text"}/>
            </>
        )
    }
}


const mapDispatchToProps = (dispatch) => {

    return{

        setFirstNameInput : (e) => dispatch(handleChangeName( 'CHANGE_FIRST_INPUT_NAME' , e.target.value))
    }
}

export default connect(null, mapDispatchToProps)(FirstName);