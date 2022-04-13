import React from "react";

class SecondName extends React.Component {

    constructor(props){

        super(props);

    }

    render(){

        return(

            <>
                Second Name: <input  name={"secondName"} onChange={(e)=> this.props.fun(e)} type={"text"}/>
            </>
        )
    }

}

export default SecondName;