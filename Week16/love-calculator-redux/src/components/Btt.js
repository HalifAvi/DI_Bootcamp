import React from "react";
import { connect } from "react-redux";
import { displayMatch } from '../actions/index';

class Btt extends React.Component {

    render(){

        return(

            <>
                <button onClick={this.props.displayMatch}> Check Match </button>
            </>
        )
    }
}


const mapDispatchToProps = (dispatch) => {

    return{

        displayMatch : () => dispatch(displayMatch())
    }
}

export default connect(null, mapDispatchToProps)(Btt);