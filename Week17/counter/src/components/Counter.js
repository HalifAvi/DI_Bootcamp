import React from "react";
import { connect } from "react-redux";
import { decrementCounter, incrementCounter } from "../actions";

class Counter extends React.Component{

    handleClick = (e) => {

        e.target.name === "+" ? this.props.incrementCounter() : this.props.decrementCounter();
    }


    incrementIfOdd = () => {

        if(this.props.count % 2){

            this.props.incrementCounter();
        }
    }


    incrementAsync = () => {

        setTimeout(() =>  this.props.incrementCounter(), 1000); 
    } 


    doWork(callback) {
    }

    render() {

        return(

            <>
                    <h2>Clicked: {this.props.count} times</h2>
                    <button name={"+"} onClick={(e)=>this.handleClick(e)}>+</button>
                    <button name={"-"} onClick={(e)=>this.handleClick(e)}>-</button>
                    <button onClick={this.incrementIfOdd}>increment If Odd</button>
                    <button onClick={this.incrementAsync}>increment async</button>
            </>
        )
    }
}


const mapStateToProps = (state) => {

    return{

        count : state.count
    }
}


const mapDispatchToProps = (dispatch) => {

    return{

        incrementCounter : () => dispatch(incrementCounter()),
        decrementCounter : () => dispatch(decrementCounter())
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Counter)