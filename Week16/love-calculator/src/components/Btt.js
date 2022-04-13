import React from "react";

class Btt extends React.Component {

    constructor(props){

        super(props);

    }

    render(){

        return(

            <>
                <button onClick={this.props.fun}> Check Match </button>
            </>
        )
    }

}

export default Btt;