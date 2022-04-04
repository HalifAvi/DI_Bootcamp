import React from "react";

class ErrorBoundary extends React.Component{

    constructor(){

        super();
        
        this.state = {

            error : null,
            errorInfo : null
        }
    }

    componentDidCatch(error, errorInfo){

        this.setState({error : error, errorInfo : errorInfo});
    }

    render(){


        if(this.state.error){

            return(

                <>
                    <h2>Something went wrong....</h2>
                </>
            )
        }

        return this.props.children;
        
    }
}

export default ErrorBoundary;