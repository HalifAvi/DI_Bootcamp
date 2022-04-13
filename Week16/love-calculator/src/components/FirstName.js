import React from "react";

class FirstName extends React.Component {

    constructor(props){

        super(props);

    }

    render(){

        return(

            <>
                First Name: <input name={"firstName"} onChange={(e)=> this.props.fun(e)} type={"text"}/>
            </>
        )
    }

}

export default FirstName;