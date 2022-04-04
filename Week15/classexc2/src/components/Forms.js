import React from 'react'

class Forms extends React.Component{

    constructor(){

        super();

        this.state = {

            firstName : '',
            lastName : '',
            isCheck : false
        }
    }

    // Function to handle when click on submit : In case we want to do fetch to API here according to inputs 
    handleSubmit = e => {

        e.preventDefault(); // Prevent refreshing the page first
        // Now we can make fetch to API - cause we have the updated inputs data into state
        alert(this.state.firstName + " " + this.state.lastName + " " + this.state.isCheck)

    }

    // Function to set the state and store the values from inputs
    handleChange = e => {

        let value;

        e.target.type === "checkbox" ? value = e.target.checked : value = e.target.value;

        this.setState({[e.target.name] : value})
    }

    render(){

        return(

            <>
                <form onSubmit={this.handleSubmit}>
                    First Name:<input type="text" name="firstName" onChange={this.handleChange}/>
                    <br/>
                    Last Name:<input type="text" name="lastName" onChange={this.handleChange}/>
                    <br/>
                    <input type="checkbox" name="isCheck" value={this.state.isCheck} onChange={this.handleChange}/>
                    <br/>
                    <input type="submit" value="SUBMIT" />
                </form>
            </>
        )
    }
}

export default Forms;