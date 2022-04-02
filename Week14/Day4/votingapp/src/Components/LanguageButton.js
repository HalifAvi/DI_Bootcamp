import React from "react";

class LanguageButton extends React.Component{

    constructor(){

        super();

        this.state = {

            votes : 0
        }
    }


    increaseByOne = () => {

        this.setState({votes : ++(this.state.votes)});
    }


    render(){

        const styleObj = {

            textAlign : 'center',
            backgroundColor : 'lightblue',
            width: '300px',
            height: '100px',
            display: 'block',
            marginTop: '10px',
            fontSize: '20px',
            marginLeft: '500px'
        }

        return(    
            <>
                <button onClick={this.increaseByOne} style={styleObj}>{`${this.state.votes} ${this.props.name}`}<span style={{color: 'green', fontWeight: 'bold'}}> Click Here</span></button>
            </>
        )
    }
}




export default LanguageButton;