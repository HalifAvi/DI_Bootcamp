import React from "react";

class Display extends React.Component{


    render(){
                // console.log(this.props)
        return(
            <>
                <div>{this.props.fname}</div>
                <div>{this.props.lname}</div>
                <div>{this.props.per}</div>
                <div>{this.props.res}</div>
            </>
        )
    }

}



export default Display