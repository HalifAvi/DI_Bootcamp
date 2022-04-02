import React from "react";

class Color extends React.Component{

    constructor(){

        super();
        this.state = {favoriteColor : "red"}
    }

    componentDidMount(){ // Go to this function once - after creating the component (after render()) 

        setTimeout(this.changeColor, 5000);  // MENDATORY TO WRITE HERE 'this' TO RECOGNIZE THE FUNCTION
    }


    changeColor = () => {
        
        this.setState({favoriteColor : "yellow"});
    }


    changeToBlue = () => {

        this.setState({favoriteColor : "blue"});

    }


    render(){

        return(

            <>
                <h1>{`My Favorite color is ${this.state.favoriteColor}`}</h1>
                <button onClick={this.changeToBlue}>CHANGE COLOR TO BLUE</button>
            
            
            </>
        )
    }
}

export default Color;