import React from "react";
import { connect } from "react-redux";

class Display extends React.Component{

    render(){

        const { fname, sname, percentage, result } = this.props

        return(
            <>
                <div>{`${fname} ${sname}`}</div>
                <div>{percentage}</div>
                <div>{result}</div>
            </>
        )
    }
}

const mapStateToProps = (state) => {

    return{

        fname : state.firstName,
        sname : state.secondName,
        percentage : state.results.percentage,
        result : state.results.result
    }
}



export default connect(mapStateToProps, null)(Display);