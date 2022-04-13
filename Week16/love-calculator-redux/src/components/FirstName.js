import React from "react";
import { connect } from "react-redux";
import { handleChangeFirstName } from '../actions/index';

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

        setFirstNameInput : (e)=> dispatch(handleChangeFirstName(e.target.value))
    }
}

export default connect(null, mapDispatchToProps)(FirstName);