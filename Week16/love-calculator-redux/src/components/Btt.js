import React from "react";
import { connect } from "react-redux";
import { displayMatch } from '../actions/index';


const options = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
    'X-RapidAPI-Key': '35c70882f2msh5bd980c60ba86cep10f251jsn5463b7d7b519'
    }
};



class Btt extends React.Component {
    

    handleClick = () => {

        fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${this.props.secondName}&fname=${this.props.firstName}`, options)
        .then(response => response.json())
        .then(data => {

            this.props.displayMatch({ percentage: `PERCENTAGE : ${data.percentage}`, result: data.result });

        })
        .catch(err => console.error(err));
    }


    render(){

        return(

            <>
                <button onClick={this.handleClick}> Check Match </button>
            </>
        )
    }
}


const mapStateToProps = (state) => {

    return{

        secondName : state.secondName,
        firstName : state.firstName
    }
}


const mapDispatchToProps = (dispatch) => {

    return{

        displayMatch : (objRes) => dispatch(displayMatch(objRes))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Btt);