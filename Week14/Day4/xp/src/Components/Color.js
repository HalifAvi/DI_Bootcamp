import React from "react";

export default class Color extends React.Component{

    constructor(props){

        super(props);
        this.state = {favoriteColor : '',
                      show : true,
                      display : false                     
                    }
    }

    componentDidMount(){ // Go to this function once - after creating the component (after render()) 

        this.setState({favoriteColor : "red"});
    }

    
    changeColor = () => {
        
        this.setState({favoriteColor : "yellow"}); // HERE 'display' is false so we won't go to render
    }

    shouldComponentUpdate(nextProps, nextState){

        if(nextState.display){

            return true;
        }

        this.setState({display : true})

        return false;
    }


    // Only after updating the state and going to render!!!
    componentDidUpdate(prevProps, prevState) {

        if(prevState.favoriteColor != "yellow"){

            setTimeout(this.changeColor, 5000);  // MENDATORY TO WRITE HERE 'this' TO RECOGNIZE THE FUNCTION
        }
      }


    handleClick = () => {

        this.setState( {show : !this.state.show} )

    }


    render(){

        return(

            <>
                <h1>{`My favorite color is : ${this.state.favoriteColor}`}</h1>
                {/* <h1>{this.props.message}</h1> */}


                <p>{this.state.show ? <Child/> : null}</p>     
                <button onClick={this.handleClick}>DELETE HEADER</button><br/>
            </>
        )
    }
}


export class Child extends React.Component{

    constructor(){

        super();
        this.state = {favoriteColor : "red",
                      show : true
                     }
    }

    componentWillUnmount(){

        alert("The component named Header is about to be unmounted");
    }

    render(){

        return(

            <>
                <h1>Hello World!</h1>                
            </>
        )
    }
}

