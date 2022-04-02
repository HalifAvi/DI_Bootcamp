import React from 'react';


class Phone extends React.Component{

    constructor(){

        super();
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
    }

    changeColor = () => {

        this.setState({ color : "blue" }); // Automatically after using 'setState()' we will go to render
    }


    render(){

        const {brand, model, color, year} = this.state;
        return(
            <>
             <h1>{`My phone is a ${brand}`}</h1>
             <h3>{`It is a ${color} ${model} from ${year}`}</h3>
             <button onClick={this.changeColor}>Change color</button>
            </>
        )
    }
}

export default Phone;