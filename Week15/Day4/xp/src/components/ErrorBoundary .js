import React from 'react';

class ErrorBoundary extends React.Component{

    constructor(){

        super();

        this.state = {

            error : null,
            hasError : false
        }
    }


    componentDidCatch(error){

        this.setState({hasError : true, error : error});
    }


    render(){

        if(this.state.hasError){

            return(
                    <h1>{this.state.error.toString()}</h1>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;