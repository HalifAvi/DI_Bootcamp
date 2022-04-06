import React from "react";

export default class Color extends React.Component{

    constructor(){

        super();
        this.state = {favoriteColor : "red",
                      show : true
                     }
    }

    componentDidMount(){ // Go to this function once - after creating the component (after render()) 

        setTimeout(this.changeColor, 5000);  // MENDATORY TO WRITE HERE 'this' TO RECOGNIZE THE FUNCTION
    }

    shouldComponentUpdate(){

        return true;
    }


    componentDidUpdate(prevProps, prevState) {
        // this.state.favoriteColor = "orange" 
      }


    changeColor = () => {
        
        this.setState({favoriteColor : "yellow"});
    }


    changeToBlue = () => {

        this.setState({favoriteColor : "pink"});

    }


    handleClick = () => {

        this.setState( {show : !this.state.show} )

    }


    render(){

        return(

            <>
                <h1>{`My favorite color is : ${this.state.favoriteColor}`}</h1>
                <button onClick={this.changeToBlue}>CHANGE COLOR</button><br/>


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

