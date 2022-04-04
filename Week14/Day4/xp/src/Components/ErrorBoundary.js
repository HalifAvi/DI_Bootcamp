import React from "react";

class ErrorBoundary extends React.Component{

    constructor(props){

        super(props);

        this.state = {

            error : null,
            errorInfo : null
        }
    }


    componentDidCatch(error, errorInfo){

        this.setState({error : error, errorInfo: errorInfo});
    }


    render(){

        if(this.state.error){

            return(

                <>
                    <h1>Something went wrong</h1>
                    <details>
                        {this.state.error.toString()}
                        {this.state.errorInfo.ComponentStack}
                    </details>
                </>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;