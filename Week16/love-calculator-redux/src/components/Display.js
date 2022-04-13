import React from "react";
import { connect } from "react-redux";

class Display extends React.Component{


    render(){

        return(
            <>
                <div>{`${this.props.fname} ${this.props.sname}`}</div>
                <div>{this.props.per}</div>
                <div>{this.props.res}</div>
            </>
        )
    }
}

const mapStateToProps = (state) => {

    const {firstName, secondName, percentage, result} = state;

    return{

        fname : firstName,
        sname : secondName,
        per : percentage,
        res : result
    }
}



export default connect(mapStateToProps, null)(Display);