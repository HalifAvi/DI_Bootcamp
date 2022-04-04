import React from "react";


class Counter extends React.Component{

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

            if(this.state.counter >= 5){

                throw new Error('Crashed... :(')
            }

        return(

            <>
                <button onClick={this.handleClick}>ADD</button>
                {
                    this.state.counter
                }
            </>
        )
    }
}

export default Counter;