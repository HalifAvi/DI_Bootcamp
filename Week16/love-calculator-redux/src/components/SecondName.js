import React from "react";
import {connect} from "react-redux";
import {handleChangeSecondName} from '../actions/index';

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

        setSecondNameInput : (e) => dispatch(handleChangeSecondName(e.target.value))
        
    }
}

export default connect(null, mapDispatchToProps)(SecondName);