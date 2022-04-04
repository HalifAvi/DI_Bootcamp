import React from "react";

class BuggyCounter extends React.Component{

    constructor(){

        super();

        this.state = {

            counter : 0
        }
    }

    handleClick = () => {

        this.setState({counter : ++(this.state.counter)});
    }


    render(){

        const {counter} = this.state;

        if(counter >= 5){

            throw new Error("I crashed!");
        }

        return(

            <>
                <h2 onClick={this.handleClick}>{counter}</h2>
            </>
        )
    }
}

export default BuggyCounter;