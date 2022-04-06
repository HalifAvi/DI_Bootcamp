import React from 'react';
import axios from 'axios';


class AddElement extends React.Component{

    constructor(props){

        super(props);
        this.state = {

            countryToAdd : '',
            newCountryId : ''
        }
    }



    handleClick = async () => {

        const {countryToAdd} = this.state; //////////////// PAY ATTENSION NOT TO WRITE 'THIS.STATE.SOMETHINGGGGG'

        try{

            // HTTPS makes SSL problems
            let res = await axios.post(`http://localhost:5000/addCountry`, {

                countryToAdd // what we send with post request
            });

            console.log(res.data); // In axios we have the response in : res.data

            this.setState({ newCountryId : res.data[0].country_id });

        }catch (e){

            console.log(e)
        }
    }


    handleChange = (e) => {

        this.setState({countryToAdd : e.target.value});
    }


    render(){

        return(

            <>
             <input onClick={this.handleChange} placeholder='Write the country to add'/>
             <h2>The id of the country you just added : {this.state.newCountryId}</h2>
             <button onClick={this.handleClick}>ADD</button>
            </>
        )
    }
}

export default AddElement